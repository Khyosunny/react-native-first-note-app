import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../screens/MainPage';
import CreatePage from '../screens/createPage/CreatePage';
import UpdatePage from '../screens/UpdatePage';
import SearchPage from '../screens/SearchPage';

const Stack = createStackNavigator();


export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="CreatePage" component={CreatePage} />
      <Stack.Screen name="UpdatePage" component={UpdatePage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
    </Stack.Navigator>
  )
}