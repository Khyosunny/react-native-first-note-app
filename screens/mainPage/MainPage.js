import React, { useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { DataContext } from '../../App';
import { Container } from './MainPageStyle';
import Card from '../../components/card/Card';
import CreateButton from '../../components/createButton/CreateButton';



export default ({navigation}) => {
  const post = useContext(DataContext);
  const { contents } = post


  return (
    <>
      <CreateButton navigation={navigation}/>
      <Container>
        {
          contents.map((item, i) => {
            return (<Card item={item} key={i} navigation={navigation}/>)
          })
        }
      </Container>
    </>
  )
}