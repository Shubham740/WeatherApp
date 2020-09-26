import React from 'react'
import {View,Text} from 'react-native'
import styles from './SplashScreenStyles'

const SplashScreen =()=>{


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
