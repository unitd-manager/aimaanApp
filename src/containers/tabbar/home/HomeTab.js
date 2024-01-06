import { StyleSheet, View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { styles } from '../../../themes';
import SmallCardComponent from '../../../components/homeComponent/SmallCardComponent';
import HomeHeader from '../../../components/homeComponent/HomeHeader';
import { menus } from '../../../api/constant';

const HomeTab = () => {

  const renderCategoryItem = ({ item, index }) => {
    return <SmallCardComponent item={item} key={index} />;
  };

  return (
    <>
      <HomeHeader style={{ height: 100 }} />
      <View style={[styles.flexGrow1, { backgroundColor: '#fafafa' }]}>
        <FlashList
          data={menus}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          numColumns={5}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={localStyles.contentContainerStyle}
        />
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
