import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions, ActivityIndicator } from 'react-native';
// import api from '../../../api/api';
import AboutCategoryDetail from './AboutCategoryDetail';

const Subcategory = ({selectedItem}) => {
  // const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detailView, setDetailView] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(null);

  const onDismiss = () => {
    setDetailView(false);
  };
 console.log('selectedItem',selectedItem)
  // useEffect(() => {
  //   setLoading(true);
  //   api.post('/subcategory/getSubCategoryByCategoryId', { category_id: route.category_id })
  //     .then((res) => {
  //       setSubcategories(res.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching subcategories:', error);
  //       setLoading(false);
  //     });
  // }, [route.category_id]);

  const renderItem = ({ item, index }) => (

    
    <Pressable
    key={item.category_id} // Use index as the key if there's no unique identifier in the item
      style={styles.itemContainer}
      onPress={() => {
        // handleItemPress(item.category_id)
        setDetailView(true);
      }}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: `http://43.228.126.245/aimaanAPI/storage/uploads/${item.file_name}` }}
      />
      <View>
        <Text style={styles.itemTitle}>{item.sub_category_title}</Text>
      </View>
    </Pressable>
  );

  const handleItemPress = (categoryId) => {
    // Handle item press
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Subcategory</Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={selectedItem}
            horizontal={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.category_id.toString()}
          />
        )}
      </View>
      <AboutCategoryDetail detailview={detailView} setDetailView={setDetailView} singleDetail={selectedItem} onDismiss={onDismiss} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 15,
  },
  itemContainer: {
    width: (Dimensions.get('window').width - 50) / 2,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
  },
  tinyLogo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 13,
    color: '#000',
    marginTop: 10,
  },
});

export default Subcategory;
