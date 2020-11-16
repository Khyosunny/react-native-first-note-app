import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DataContext } from '../App';


import MainPage from '../screens/MainPage';
import CreatePage from '../screens/CreatePage';
import UpdatePage from '../screens/UpdatePage';
import SearchPage from '../screens/SearchPage';



function CustomDrawerContent(props) {
  const post = useContext(DataContext);
  const { categorys, dispatch, setOnCate } = post

  const onPress2 = () => {
    setOnCate(false);
  }

  const onPress = (item) => {
    setOnCate(true);
    dispatch({ type: 'CATEGORY_FILTER', category: item });
  }

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem label="전체 노트" onPress={() => {onPress2()}} />
      {
        categorys && categorys.map((item) => {
          return <DrawerItem label={item} key={item} onPress={() => { onPress(item) }}/>
        })
      }
    </DrawerContentScrollView>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="CreatePage" component={CreatePage} />
      <Stack.Screen name="UpdatePage" component={UpdatePage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="모든 노트" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;