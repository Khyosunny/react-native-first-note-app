import React, {useContext, useState} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { DataContext } from '../../App';

const CardContainer = styled.TouchableOpacity`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 15px;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const CardText = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

const CardDate = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 10px;
`;

export default ({item, navigation, slideUp}) => {
  const post = useContext(DataContext);

  const { dispatch, onLong, setOnLong, setCategoryChange } = post

  const onLongPress = (id) => {
    setOnLong(true)
    slideUp();
    dispatch({type: 'ACTIVE_LONG', id: id})
  }

  const onPress = (id) => {
    if (!onLong) {
      setCategoryChange(item.category)
      navigation.navigate('UpdatePage', item)
    } else {
      dispatch({type: 'ACTIVE_TOGGLE', id: id})
    }
  }
  
  return (
    <CardContainer 
    style={{backgroundColor: item.active ? "#eee" : "#fff"}} onLongPress={() => {onLongPress(item.id)}} onPress={() => {onPress(item.id)}}>
      {
        item.title === '' ? null
        : <CardTitle numberOfLines={3}>{item.title}</CardTitle>
      }
      {
        item.note === '' ? null
        : <CardText numberOfLines={3}>{item.note}</CardText>
      }
      <CardDate>{item.date}</CardDate>
      <CardDate>{item.category}</CardDate>
    </CardContainer>
  )
}