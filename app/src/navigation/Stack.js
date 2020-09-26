import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator()


const ScreenStack = ()=>{

            return(
                <Stack.Navigator
                headerMode="none"
                initialRouteName="SplashScreen"
                >
                    <Stack.Screen name="SplashScreen" component={Screens.SplashScreen} />
                    <Stack.Screen name="MainScreen" component={Screens.MainScreen} />
        
                </Stack.Navigator>
            )

}

export default ScreenStack;

