import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../screens/mainPage/MainPage';
import CreatePage from '../screens/createPage/CreatePage';
import UpdatePage from '../screens/updatePage/UpdatePage';

const Stack = createStackNavigator();


export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreatePage" component={CreatePage} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="UpdatePage" component={UpdatePage} />
    </Stack.Navigator>
  )
}