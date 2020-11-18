import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DataContext } from '../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from 'react-native-vector-icons/Ionicons';


import MainPage from '../screens/MainPage';
import CreatePage from '../screens/CreatePage';
import UpdatePage from '../screens/UpdatePage';
import SearchPage from '../screens/SearchPage';



function CustomDrawerContent(props) {
  const post = useContext(DataContext);
  const { categories, dispatch } = post

  const onPress = (item) => {
    dispatch({ type: 'CATEGORY_FILTER', category: item });
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <TouchableHighlight
          style={{ width: 60, height: 60, borderRadius: 60, alignSelf: "flex-end", marginRight: 10 }}
          activeOpacity={1}
          underlayColor="rgba(0,0,0,0.3)"
          onPress={() => { props.navigation.closeDrawer(); }}>
          <Settings
            name="settings-sharp"
            color="#666"
            size={35}
            style={{ textAlign: 'center', lineHeight: 60 }} />
      </TouchableHighlight> 
      
      <DrawerItem
        style={{ marginTop: 10, marginLeft: 20 }}
        icon={({ color, size }) => <Icon name="bookmark-multiple" color="#666" size={30}/>}
        label="전체 노트"
        labelStyle={{ fontSize: 20, color: "#222" }}
        onPress={() => { onPress('') }} />
      {
        categories && categories.map((item) => {
          return <DrawerItem
            style={{ marginLeft: 20 }}
            icon={({ color, size }) => <Icon name="bookmark" color="#666" size={30}/>}
            label={item}
            labelStyle={{ fontSize: 20, color: "#222" }}
            key={item}
            onPress={() => { onPress(item) }} />
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
    <Drawer.Navigator
      drawerStyle={{ width: '80%', borderTopEndRadius: 20, borderBottomEndRadius: 20 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="모든 노트" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;