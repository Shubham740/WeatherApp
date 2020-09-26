import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SplashScreenStyles';
import IMAGES from '../../../assets/images/';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000);
  });

  return (
    <View style={styles.parentView}>
      <Image style={styles.imageViewStyle} source={IMAGES.SPLASH_SCREEN}></Image>
    </View>
  );
};
export {SplashScreen};
