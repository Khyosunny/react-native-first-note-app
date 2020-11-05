import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { DataContext } from '../../App';
import styled from 'styled-components';
import Card from '../../components/card/Card';
import CreateButton from '../../components/createButton/CreateButton';
import AnimatedHeader from '../../components/header/AnimatedHeader';

const DeleteText = styled.Text`
  font-size: 18px;
  text-align: center;
  line-height: 60px;
`;

const CancleText = styled.Text`
  font-size: 18px;
  text-align: center;
  line-height: 60px;
`;

const Select = styled.TouchableOpacity`
  background-color: grey;
  width: 50%
`;

const SelectPopup = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 15;
  flex-direction: row;
`;

const Container = styled.ScrollView`
  width: 100%;
  background-color: #eae9ef;
`;

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { contents, setCategoryChange, onLong } = post

  const offset = useRef(new Animated.Value(0)).current;
  const contentsLength = contents.length

  return (
    <>
      {
        onLong ? null : <CreateButton 
        navigation={navigation} 
        setCategoryChange={setCategoryChange}
        />
      }
      <AnimatedHeader animatedValue={offset} navigation={navigation} contentsLength={contentsLength}/>
      <Container contentContainerStyle={{paddingTop: 200, paddingBottom: 30}} scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } }}],
            { useNativeDriver: false })}>
        {
          contents.map((item, i) => {
            return (<Card item={item} key={i} navigation={navigation}/>)
          })
        }
      </Container>
      {
        onLong ?
          <SelectPopup>
            <Select>
              <CancleText>취소</CancleText>
            </Select>
            <Select>
              <DeleteText>삭제</DeleteText>
            </Select>
          </SelectPopup>
        : null
      }
      
    </>
  )
}