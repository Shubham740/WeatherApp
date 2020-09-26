import React,{useEffect} from 'react'
import {View,Text} from 'react-native'
import styles from './SplashScreenStyles'

const SplashScreen =({navigation})=>{
    useEffect(() => {
            navigation.navigate('MainScreen')
      });

    return(
        <View
       style ={styles.parentView}
       
       >
                <Text>
                {'Splash scrren'}
                </Text>
        </View>    
    )
    
   
}
export {SplashScreen};
