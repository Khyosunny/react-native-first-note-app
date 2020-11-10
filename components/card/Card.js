import React, {useContext, useState} from 'react';
import { Text, Animated } from 'react-native';
import styled from 'styled-components';
import { DataContext } from '../../App';

export default ({item, navigation, slideUp, radioValue, radioVisible}) => {
  const post = useContext(DataContext);
  const { dispatch, onLong, setOnLong, setCategoryChange } = post

  const paddingAdd = radioValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50]
  });

  const transX = radioValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50]
  });

  const transScale = radioValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });
  
  const onLongPress = (id) => {
    setOnLong(true)
    slideUp();
    radioVisible();
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
      onLongPress={() => { onLongPress(item.id) }} onPress={() => { onPress(item.id) }}>
      <Animated.View
        style={{
          transform: [{
              scale: transScale
          }],
          width: 30,
          height: 30,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: '#7A93CE',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 20,
          left: 20
        }}>
        {
          item.active && <Selected />
        }
      </Animated.View>
      <Animated.View
        style={{
          transform: [{
            translateX: transX
          }],
          paddingRight: paddingAdd
        }}>
        {
          item.title === '' ? null
          : <CardTitle numberOfLines={3}>{item.title}</CardTitle>
        }
        {
          item.note === '' ? null
            : <CardNote numberOfLines={3}>{item.note}</CardNote>
        }
      </Animated.View>
      <CardDate>{item.date}</CardDate>
      <CardDate>{item.category}</CardDate>
    </CardContainer>
  )
}

const CardDate = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 10px;
`;

const CardNote = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const Selected = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #7A93CE;
`;

// const RadioCircle = styled.TouchableOpacity`
//   width: 30px;
//   height: 30px;
//   border-radius: 30px;
//   border: 2px solid #7A93CE;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 20px;
//   left: 20px;
// `;

const CardContainer = styled.TouchableOpacity`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 15px;
  overflow: hidden;
`;