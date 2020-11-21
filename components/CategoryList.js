import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { DataContext } from '../App';
import CategoryCreateButton from './button/CategoryCreateButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({IsOpen}) => {
  const post = useContext(DataContext);
  const { categories } = post

  return (
    <CategoryBox>
      {
        categories && categories.map((item, index)=>{
          return (
          <AlignBox onPress={() => {}} key={item}>
            {
              IsOpen && <CheckBox index={index}/> 
            }
            <Icon name="bookmark" color="#666" size={30}/>
            <Category>{item}</Category>
          </AlignBox>
          )
        })
      }
      <CategoryCreateButton />
    </CategoryBox>
  )
}

function CheckBox({index}) {
  const [ check, setCheck ] = useState(false);

  const change = () => {
    setCheck(!check);
  }
  return (
    <CheckButton check={check} onPress={() => {change()}}>
      <Icon name={check ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'} color="#666" size={30} />
    </CheckButton>
  )
}

const Category = styled.Text`
  font-size: 22px;
  margin-left: 20px;
`;

const CheckButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  
`;

const AlignBox = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  padding: 20px 0;
  align-items: center;
`;

const CategoryBox = styled.View`
  background-color: #fff;
  padding: 0 20px;
  border-radius: 10px;
`;