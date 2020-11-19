import React, { useEffect, useState} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default ({item, event, contents}) => {
  const [count, setCount] = useState(0)

  const counter = () => {
    const arr = contents.filter((i) => {
      return i.category === item
    });
    setCount(arr.length);
  };

  useEffect(() => {
    counter();
  },[contents])

  return (
    <View>
      <DrawerItem
        style={{ marginLeft: 20 }}
        icon={({ color, size }) => <Icon name="bookmark" color="#666" size={30}/>}
        label={item}
        labelStyle={{ fontSize: 20, color: "#222" }}
        onPress={() => { event(item) }} />
      <Text style={{ marginLeft: 50 }}>{count}</Text>
    </View>
  )
}