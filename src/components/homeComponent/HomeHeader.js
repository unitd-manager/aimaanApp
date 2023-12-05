import { StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import React, {useState,useCallback} from 'react';
import {useSelector} from 'react-redux';

// custom imports
import {styles} from '../../themes';
import EText from '../common/EText';
import {moderateScale} from '../../common/constants';
import images from '../../assets/images';
import SearchComponent from './SearchComponent';
import LinearGradient from 'react-native-linear-gradient';

function HomeHeader() {

  const colors = useSelector(state => state.theme.theme);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  // const [search, setSearch] = useState('search');
  // const onSearchInput = useCallback(text => setSearch(text), []);

  return (
    <ImageBackground
    source={images.banner}
    style={localStyles.imageStyle}
    resizeMode="cover">

<LinearGradient
        colors={['rgba(0,223,29,0.6)', 'rgba(0,128,83,0.6)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={localStyles.gradientContainer}
      >
    <View style={localStyles.headerContainer}>
      <View style={localStyles.textContainer}>
        <EText type="m20" numberOfLines={1} color={colors.white}>
         Welcome to Aiman
         </EText> 
         {/* <SearchComponent search={search} onSearchInput={onSearchInput} /> */}

         <TextInput
        style={localStyles.input}
        placeholder="Search here..."
        value={inputValue}
        onChangeText={handleInputChange}
      />

      </View>
    </View>
    </LinearGradient>
  </ImageBackground>

  );
}

export default React.memo(HomeHeader);

const localStyles = StyleSheet.create({
  headerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.flex,
    ...styles.mt15,
   flex:0,
   marginHorizontal:20,
  },
  imageStyle: {
    width: '100%',
    height: moderateScale(160),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textContainer: {
    ...styles.mh10,
    ...styles.flex,
    ...styles.mt10
  },
  notificationContainer: {
    ...styles.center,
    ...styles.ph10,
    ...styles.pv10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  gradientContainer: {
    flex: 1,
  },
  input: {
    height: 50,
    padding: 10,
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius:5,
    marginTop:20
  },
});
