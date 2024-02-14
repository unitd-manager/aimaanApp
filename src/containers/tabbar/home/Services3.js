import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../../api/api';
import AboutCategoryDetail from './AboutCategoryDetail';
import EHeader from '../../../components/common/EHeader';
import Servicesub from './ServicesSub'

const ListFlat = () => {
  const route = useRoute();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detailview, setDetailView] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [subItem, setSubItem] = useState();

  

  const onDismiss = () => {
    setDetailView(false);
  }
//   console.log('selectedItem',selectedItem)
// console.log('clients',clients)
  useEffect(() => {
    setLoading(true);
    api.post('/category/getSectionsCategoryAboutUs', { section_id: route.params.id })
      .then((res) => {
        res.data.data.forEach((element) => {
          element.tag = String(element.tag).split(',');
          
          api.post('/subcategory/getSubCategoryByCategoryId', {category_id: element.category_id })
          .then((res1) => {
            setSelectedItem(res1.data.data);
            setSubItem(res1.data.data.category_id )
          })
        });
        setClients(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching client details by ID:', error);
      });
  }, []);
    // const subId = clients.category_id
    console.log('subId',subItem)
    console.log('clients',clients)
  const handleItemPress = () => {
    
        // setSelectedItem(res.data.data);
     
  };

  return (
    <>
      <EHeader title={route.params.section_title} />
      <View style={styles.container}>
        <Text>Category</Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={clients}
            horizontal={true}
            // numColumns={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={styles.itemContainer}
                // onPress={() => handleItemPress(item.category_id)}>
                onPress={() => {
                   handleItemPress(item.category_id)
                  setDetailView(true);
                }}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: `http://43.228.126.245/aimaanAPI/storage/uploads/${item.file_name}` }}
                />
                <View>
                  <Text style={styles.itemTitle}>{item.category_title}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.category_id.toString()}
          />
        )}
        
      </View>
      <Servicesub detailview={detailview} setDetailView={setDetailView} selectedItem={selectedItem} onDismiss={onDismiss} ></Servicesub>
      {/* <AboutCategoryDetail detailview={detailview} setDetailView={setDetailView} singleDetail={selectedItem} onDismiss={onDismiss} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  itemContainer: {
    width: (Dimensions.get('screen').width - 50) / 2,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 100,
  },
  tinyLogo: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 15,
    color: '#000',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default ListFlat;
