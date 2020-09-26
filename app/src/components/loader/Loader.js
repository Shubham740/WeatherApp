import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import CUSTOM_JSON from '../../../assets/json/index'
import styles from './LoaderStyles'

const Loader = (props) => {
    return props.isLoading ? (
      <View style={styles.loaderViewStyle}>
        <LottieView
          source={CUSTOM_JSON.LOADER_JSON}
          autoPlay
          style={styles.lottieViewStyle}
          resizeMode="cover"
        />
      </View>
    ) : <View></View>;
  };
  
  export { Loader };

  
