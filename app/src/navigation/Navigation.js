import React from 'react'

import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './Stack';


const Navigation = () => {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
};

export default Navigation;
