import React from 'react';
import { CardContainer, CardTitle, CardText, CardDate } from './CardStyle';

export default ({item}) => {
  return (
    <CardContainer>
      <CardTitle numberOfLines={3}>{item.title}</CardTitle>
      <CardText numberOfLines={3}>{item.text}</CardText>
      <CardDate>{item.date}</CardDate>
    </CardContainer>
  )
}