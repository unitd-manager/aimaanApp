import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom Imports
import { commonColor, styles } from '../../themes';
import { deviceWidth, moderateScale } from '../../common/constants';
import EText from '../common/EText';

export default function SmallCardComponent({ item, index }) {
  const navigation = useNavigation();

  const [englishTitle, tamilTitle] = (item?.section_title || '').split(' / ');

  // const onPressDetail = () => {
  //   if (item.routes === 'ViewDetails') {
  //     navigation.navigate('ViewDetails', { title: englishTitle }); 
  //   }
  // };

  return (
    <>
      <TouchableOpacity
        style={[
          localStyles.root,
          {
            marginLeft: index % 2 === 0 ? 5 : 0,
            marginRight: index % 2 === 0 ? 0 : 5,
          },
        ]}
        onPress={() => navigation.navigate(item.routes, { title: englishTitle })}
      >
        <View style={{borderWidth:1, borderColor: '#CBCBCB', borderRadius: moderateScale(100), padding:10 }}>
          <Image
            source={{
              uri: `http://43.228.126.245/aimaanAPI/storage/uploads/${item?.file_name}`,
            }}
            style={localStyles.imageStyle}
          />
        </View>
        <EText
          type={'S16'}
          numberOfLines={1}
          style={localStyles.textStyle}
        >
          {englishTitle}
        </EText>
      </TouchableOpacity>
    </>
  );
}

const localStyles = StyleSheet.create({
  root: {
    // ...styles.p5,
    ...styles.flex,
    ...styles.justifyCenter,
    width: (deviceWidth - moderateScale(120)) / 2 ,
    ...styles.mt15,
    borderRadius: moderateScale(100),
    marginBottom: 15,
  },
  imageStyle: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textStyle: {
    ...styles.mt10,
    ...styles.flex,
    alignSelf: 'center',
    fontSize: 12,
  },
  locationSubContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.flex,
  },
  locationContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
    ...styles.mb5,
  },
  freeContainer: {
    height: moderateScale(22),
    width: moderateScale(36),
    borderRadius: moderateScale(8),
    ...styles.selfEnd,
    ...styles.center,
    backgroundColor: commonColor.primary5,
    right: moderateScale(10),
    top: moderateScale(10),
  },
});
