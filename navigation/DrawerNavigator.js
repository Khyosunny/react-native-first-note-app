import React, { useContext } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { DataContext } from '../App';
import CustomDrawerItem from '../components/CustomDrawerItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MainPage from '../screens/MainPage';
import CreatePage from '../screens/CreatePage';
import UpdatePage from '../screens/UpdatePage';
import SearchPage from '../screens/SearchPage';



function CustomDrawerContent(props) {
  const post = useContext(DataContext);
  const { categories, dispatch, contents } = post
  

  const onPress = (item) => {
    dispatch({ type: 'CATEGORY_FILTER', category: item });
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <MenuTitle>효선 노트</MenuTitle>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <DrawerMenu 
          activeOpacity={1}
          underlayColor="rgba(0,0,0,0.3)"
          onPress={() => { onPress('') }}
        >
          <AlignBox>
            <Icon style={{flex: 1, marginLeft: 30}} name="bookmark-multiple" color="#666" size={30}/>
            <DrawerTitle>전체노트</DrawerTitle>
            <CategoryLength>{contents.length}</CategoryLength>
          </AlignBox>
        </DrawerMenu>
        
        {
          categories && categories.map((item) => {
            return <CustomDrawerItem item={item} key={item} event={onPress} contents={contents}/>
          })
        }
      </View>
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

const MenuTitle = styled.Text`
  font-size: 30px;
  margin-left: 30px;
  margin-top: 50px;
`;

const CategoryLength = styled.Text`
  font-size: 18px;
  color: #666;
  justify-content: flex-end;
  flex: 1;
`;

const DrawerTitle = styled.Text`
  flex: 4;
  font-size: 22px;
`;

const AlignBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const DrawerMenu = styled.TouchableHighlight`
  flex-direction: row;
  width: 96%;
  height: 50px;
  margin: 5px 0;
`;