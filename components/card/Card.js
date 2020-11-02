import React, {useContext} from 'react';
import { Text } from 'react-native';
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
      {
        item.title === '' ? null
        : <CardTitle numberOfLines={3}>{item.title}</CardTitle>
      }
      {
        item.note === '' ? null
        : <CardText numberOfLines={3}>{item.note}</CardText>
      }
      <CardDate>{item.date}</CardDate>
    </CardContainer>
  )
}