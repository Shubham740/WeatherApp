import React from 'react';
import {View, Text} from 'react-native';
import styles from './MainScreenStyles';
import {Loader} from '../../components/loader/Loader'
const MainScreen = ({navigation}) => {
  return (
    <View style={styles.parentView}>
        <Loader isLoading={true}/>
    </View>
  );
};
export {MainScreen};
