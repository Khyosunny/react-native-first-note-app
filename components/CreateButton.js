import React from 'react';
import styled from 'styled-components';

const CreateButtonContainer = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: #FF7974;
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 10;
`;

const Plus = styled.Text`
  font-size: 40px;
  text-align: center;
  line-height: 80px;
  color: #fff;
`;


export default ({navigation, setCategoryChange}) => {

  const onCreatePage = () => {
    navigation.navigate('CreatePage')
    setCategoryChange('카테고리 미지정')
  }

  return (
    <CreateButtonContainer onPress={onCreatePage}>
      <Plus>＋</Plus>
    </CreateButtonContainer>
  )
}