import React from 'react';
import styled from 'styled-components';

export default ({onModalVisible, categoryChange}) => {
  return (
    <Container>
      <CategoryButton onPress={onModalVisible}>
        <CategoryText>{categoryChange}</CategoryText>
      </CategoryButton>
    </Container>
  )
}

const CategoryText = styled.Text`
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #666;
`;

const CategoryButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 20px;
  border: 1px solid #666;
  padding: 0 15px;
`;

const Container = styled.View`
  width: 100%;
  padding: 10px 15px;
`;