import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

import { DataContext } from '../App';
import Card from '../components/card/Card';
import CreateButton from '../components/button/CreateButton';
import AnimatedHeader from '../components/header/AnimatedHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/AntDesign';

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { contents, setCategoryChange, onLong, setOnLong, dispatch, allSelect, selectCategory, categoryContents, contentsLength } = post

  const offset = useRef(new Animated.Value(0)).current;
  const slideUpValue = useRef(new Animated.Value(0)).current;
  const radioValue = useRef(new Animated.Value(0)).current;

  const onALLSelect = () => {
    if (allSelect === false) {
      dispatch({ type: 'ALL_SELECT_TRUE' });
    } else {
      dispatch({ type: 'ALL_SELECT_TOGGLE' });
    }
  };

  const slideDownAndRadio = () => {
    Animated.parallel([
      Animated.timing(radioValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(slideUpValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      })
    ]).start();
  };

  const slideUpAndRadio = () => {
    Animated.parallel([
      Animated.timing(radioValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(slideUpValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      })
    ]).start();
  };

  const selectCancle = async () => {
    await dispatch({ type: 'SELECT_CANCLE' });
    await setOnLong(false);
    slideDownAndRadio();
  };

  const selectDelete = async () => {
    await dispatch({ type: 'SELECT_DELETE' });
    await setOnLong(false);
    slideDownAndRadio();
  };

  useEffect(() => {
    dispatch({ type: 'ALL_SELECT_FALSE' })
  }, [contents])


  return (
    <>
      {
        onLong ? null : <CreateButton 
        navigation={navigation} 
        setCategoryChange={setCategoryChange}
        />
      }
      <AnimatedHeader
        animatedValue={offset}
        navigation={navigation}
        contentsLength={contentsLength}
        onLong={onLong}
        onALLSelect={onALLSelect}
        allSelect={allSelect}
        selectCategory={selectCategory}
      />
      <Container
        contentContainerStyle={{ paddingTop: 200, paddingBottom: contentsLength >= 1 ? 170 : 300 }}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }],{ useNativeDriver: false })}>
        {
          categoryContents ?
          categoryContents.map((item, i) => {
            return (<Card item={item} key={i} navigation={navigation} radioValue={radioValue} slideUpAndRadio={slideUpAndRadio}/>)
          })
          : <NoData>등록된 노트가 없습니다.</NoData>
        }
      </Container>
        <Animated.View
          style={{
            transform: [
              {
                translateY: slideUpValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [70, 0],
                  extrapolate: 'clamp'
                })
              }
            ],
            width: '100%',
            height: 70,
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderColor: '#f1f1f1',
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 15,
            flexDirection: 'row'
          }}>
          <Select onPress={selectCancle}>
            <Back name="back" color="#222" size={30}/>
            <CancleText>취소</CancleText>
          </Select>
          <Select onPress={selectDelete}>
            <Icon name="delete" color="#222" size={30}/>
            <DeleteText>삭제</DeleteText>
          </Select>
        </Animated.View>
    </>
  )
}

const DeleteText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #000;
`;

const CancleText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #000;

`;

const Select = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50%
`;

// const SelectPopup = styled.View`
//   width: 100%;
//   height: 60px;
//   background-color: #fff;
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   z-index: 15;
//   flex-direction: row;
// `;

const NoData = styled.Text`
  font-size: 20px;
  text-align: center;
  padding-top: 60px;
  color: #333;
`;


const Container = styled.ScrollView`
  width: 100%;
  background-color: #F6EEEA;
`;