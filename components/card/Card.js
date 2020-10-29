import React, {useContext} from 'react';
import { CardContainer, CardTitle, CardText, CardDate } from './CardStyle';
import { DataContext } from '../../App';

export default ({item, navigation}) => {
  const post = useContext(DataContext);
  const { dispatch } = post


  const mount = () => {
    dispatch({
      type: 'UPDATE_MOUNT',
      title: item.title,
      note: item.note
    })
    navigation.navigate('UpdatePage', { id: item.id })
  }
  return (
    <CardContainer onPress={mount}>
      <CardTitle numberOfLines={3}>{item.title}</CardTitle>
      <CardText numberOfLines={3}>{item.note}</CardText>
      <CardDate>{item.date}</CardDate>
    </CardContainer>
  )
}