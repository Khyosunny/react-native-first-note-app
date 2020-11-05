import React, { useContext, useRef } from 'react';
import { Animated } from 'react-native';
import { DataContext } from '../../App';
import { Container } from './MainPageStyle';
import Card from '../../components/card/Card';
import CreateButton from '../../components/createButton/CreateButton';
import AnimatedHeader from '../../components/header/AnimatedHeader';



export default ({navigation}) => {
  const post = useContext(DataContext);
  const { contents, setCategoryChange } = post

  const offset = useRef(new Animated.Value(0)).current;

  const contentsLength = contents.length

  return (
    <>
      <CreateButton navigation={navigation} setCategoryChange={setCategoryChange}/>
      <AnimatedHeader animatedValue={offset} navigation={navigation} contentsLength={contentsLength}/>
      <Container contentContainerStyle={{paddingTop: 200}} scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } }}],
            { useNativeDriver: false })}>
        {
          contents.map((item, i) => {
            return (<Card item={item} key={i} navigation={navigation}/>)
          })
        }
      </Container>
    </>
  )
}