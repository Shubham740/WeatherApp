import React from 'react';
import {View, Text} from 'react-native';
import styles from './MainScreenStyles';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.parentView}>
      <Text>{'Main scrren'}</Text>
    </View>
  );
};
export {MainScreen};
