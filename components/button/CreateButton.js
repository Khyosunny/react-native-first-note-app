import React from 'react';
import styled from 'styled-components';

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

const CreateButtonContainer = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: #FF7974;
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 10;
`;

const Plus = styled.Text`
  font-size: 36px;
  text-align: center;
  line-height: 70px;
  color: #fff;
`;