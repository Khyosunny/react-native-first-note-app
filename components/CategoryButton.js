import React from 'react';
import styled from 'styled-components';

const CategoryText = styled.Text`
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #666;
`;

const CategoryButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #666;
  padding: 0 15px;
`;

const Container = styled.View`
  width: 100%;
  background-color: pink;
  padding: 10px 15px;
`;

export default ({onModalVisible}) => {

  return (
    <Container>
      <CategoryButton onPress={onModalVisible}>
        <CategoryText>카테고리 미지정</CategoryText>
      </CategoryButton>
    </Container>
  )
}