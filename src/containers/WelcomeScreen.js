import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Custom Imports
import images from '../assets/images';
import { commonColor, styles } from '../themes';
import { moderateScale } from '../common/constants';
import EButton from '../components/common/EButton';
import { StackNav } from '../navigation/NavigationKeys';

export default function WelcomeScreen() {
  const colors = useSelector((state) => state.theme.theme);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={images.getStarted}
      style={localStyles.imageStyle}
      resizeMode="cover">
      <View style={localStyles.container}>
      <EButton
          title="Getting Start"
          type={'S16'}
          containerStyle={localStyles.signBtnContainer}
          onPress={() => navigation.navigate(StackNav.HomeTab)}
          />
      </View>
    </ImageBackground>
  );
}

const localStyles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 200,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topContainer: {
    ...styles.m20,
    ...styles.rowSpaceBetween,
    ...styles.p15,
    borderRadius: moderateScale(12),
  },
  skipBtnContainer: {
    width: '35%',
    height: moderateScale(35),
    borderRadius: moderateScale(17),
    borderWidth: moderateScale(1),
    borderColor: commonColor.primary5,
  },
  signBtnContainer:{
    backgroundColor: commonColor.primary5,
  }
});