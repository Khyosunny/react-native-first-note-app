import React from 'react';
import styled from 'styled-components';

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

export default ({item, navigation}) => {

  return (
    <CardContainer onPress={() => {navigation.navigate('UpdatePage', item)}}>
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