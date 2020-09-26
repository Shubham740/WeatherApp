import React,{useEffect} from 'react'
import {View,Text} from 'react-native'
import styles from './SplashScreenStyles'

const SplashScreen =({navigation})=>{
    useEffect(() => {
           setTimeout(()=>{
            navigation.navigate('MainScreen')
           },3000)
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
