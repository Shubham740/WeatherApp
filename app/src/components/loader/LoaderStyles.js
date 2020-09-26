import React  from 'react';
import {StyleSheet} from 'react-native'
import { getWidthScale } from "../../utils/Utils";

const styles = StyleSheet.create({
    loaderViewStyle: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 1,
    },
    lottieViewStyle:{
      height: getWidthScale(150),
      width: getWidthScale(150),
    }
  });
  export default styles;
  

  