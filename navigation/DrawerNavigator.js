import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainPage from '../screens/mainPage/MainPage';


const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator initialRouteName="전체">
      <Drawer.Screen name="전체" component={MainPage} />
    </Drawer.Navigator>
  )
}