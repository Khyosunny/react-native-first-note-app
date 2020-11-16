import React, { useContext, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

import { DataContext } from '../App';
import Card from '../components/card/Card';
import CreateButton from '../components/CreateButton';
import AnimatedHeader from '../components/header/AnimatedHeader';

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { contents, setCategoryChange, onLong, setOnLong, dispatch, allSelect, categoryContents } = post

  const offset = useRef(new Animated.Value(0)).current;
  const slideUpValue = useRef(new Animated.Value(0)).current;
  const radioValue = useRef(new Animated.Value(0)).current;
  const contentsLength = categoryContents.length
   
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


  const selectCancle = () => {
    dispatch({ type: 'SELECT_CANCLE' });
    slideDownAndRadio();
    setOnLong(false);
  };

  const selectDelete = () => {
    dispatch({ type: 'SELECT_DELETE' });
    slideDownAndRadio();
    setOnLong(false);
  };

  useEffect(() => {
    dispatch({ type: 'START_CONTENTS' });
  }, [])

  
  return (
    <>
      {
        onLong ? null : <CreateButton 
        navigation={navigation} 
        setCategoryChange={setCategoryChange}
        />
      }
      <AnimatedHeader animatedValue={offset} navigation={navigation} contentsLength={contentsLength} onLong={onLong} onALLSelect={onALLSelect} allSelect={allSelect}/>
      <Container contentContainerStyle={{paddingTop: 200, paddingBottom: 30}} scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } }}],
            { useNativeDriver: false })}>
        {
          categoryContents.map((item, i) => {
            return (<Card item={item} key={i} navigation={navigation} radioValue={radioValue} slideUpAndRadio={slideUpAndRadio}/>)
          })
        }
      </Container>
        <Animated.View
          style={{
            transform: [
              {
                translateY: slideUpValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [60, 0]
                })
              }
            ],
            width: '100%',
            height: 60,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 15,
            flexDirection: 'row'
          }}>
          <Select onPress={selectCancle}>
            <CancleText>취소</CancleText>
          </Select>
          <Select onPress={selectDelete}>
            <DeleteText>삭제</DeleteText>
          </Select>
        </Animated.View>
    </>
  )
}

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
  background-color: #eee;
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

const Container = styled.ScrollView`
  width: 100%;
  background-color: #F6EEEA;
`;