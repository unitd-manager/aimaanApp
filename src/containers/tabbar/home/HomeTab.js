import {
  StyleSheet, View, Image, FlatList,
  Pressable,
  Dimensions,
  Text
} from 'react-native';
import React, { useState, useEffect, TextInput } from 'react';
import { useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';

// Custom Imports
import { styles } from '../../../themes';
import SmallCardComponent from '../../../components/homeComponent/SmallCardComponent';
import EText from '../../../components/common/EText';
import api from '../../../api/api';
import HomeHeader from '../../../components/homeComponent/HomeHeader';
import images from '../../../assets/images';

const HomeTab = () => {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);

  const quran = [
    {
      id: '1',
      img: images.quran1,
    },
    {
      id: '2',
      img: images.quran2,
    },
    {
      id: '3',
      img: images.quran1,
    },
  ];

  // getMenus
  const [menu, setMenu] = useState()
  const getMenus = () => {
    api
      .get('/section/getSectionMenu')
      .then(res => {
        setMenu(res.data.data);
      })
      .catch(error => {
        console.log("error", error)
      });
  };

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  useEffect(() => {
    getMenus();
  }, []);

  const renderCategoryItem = ({ item, index }) => {
    return <SmallCardComponent item={item} key={index} />;
  };

  return (
    <>
      <HomeHeader style={{ height: 100 }} />
<View></View>
      <View style={[styles.flexGrow1, { backgroundColor: '#fafafa' }]}>
        <FlashList
          data={menu}
          extraData={extraData}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          numColumns={5}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={localStyles.contentContainerStyle}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>

        <EText type="B24" color={colors.theme}> No about Quran</EText>

        <View style={{ marginVertical: 30, }}>

          <FlatList
            data={quran}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                style={{
                  width: Dimensions.get('screen').width / 1.7,
                  marginLeft: 10,
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: '#f5f5f5'
                }}
              >
                <Image
                  source={item.img}
                  style={{
                    borderRadius: 5,
                    width: '100%',
                    height: 150,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />
              </Pressable>
            )}
            keyExtractor={item => item.id}
          />

        </View>

      </View>
    </>

  );
}

export default HomeTab
const localStyles = StyleSheet.create({
  contentContainerStyle: {
    ...styles.ph10,
    ...styles.pb50,
  },
  flatList: {
    marginTop: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


// import { StyleSheet, View } from 'react-native';
// import React from 'react';
// import { FlashList } from '@shopify/flash-list';
// import { styles } from '../../../themes';
// import SmallCardComponent from '../../../components/homeComponent/SmallCardComponent';
// import HomeHeader from '../../../components/homeComponent/HomeHeader';
// import { menus } from '../../../api/constant';

// const HomeTab = () => {

//   const renderCategoryItem = ({ item, index }) => {
//     return <SmallCardComponent item={item} key={index} />;
//   };

//   return (
//     <>
//       <HomeHeader style={{ height: 100 }} />
//       <View style={[styles.flexGrow1, { backgroundColor: '#fafafa' }]}>
//         <FlashList
//           data={menus}
//           renderItem={renderCategoryItem}
//           keyExtractor={(item, index) => index.toString()}
//           estimatedItemSize={10}
//           numColumns={5}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={localStyles.contentContainerStyle}
//         />
//       </View>
//     </>
//   );
// }

// export default HomeTab
// const localStyles = StyleSheet.create({
//   contentContainerStyle: {
//     ...styles.ph10,
//     ...styles.pb50,
//   },
//   flatList: {
//     marginTop: 100,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
