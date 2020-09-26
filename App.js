import React from 'react';
import {View, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './app/src/navigation/Navigation'




const App=()=>{
  return(
    // <Provider>

    <View
    style={{flex:1}}
    >
<StatusBar
            backgroundColor={'blue'}
            barStyle='dark-content'
          />
          <Navigation/>
    </View>
    // </Provider>

  )
}
export default App;