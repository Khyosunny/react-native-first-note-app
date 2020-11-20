import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({event}) => {

  return (
    <Container onPress={event}>
      <Icon name="plus" color="green" size={30}/>
      <CategoryAdd>카테고리 추가</CategoryAdd>
    </Container>
  )
}

const CategoryAdd = styled.Text`
  font-size: 22px;
  margin-left: 10px;
`;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 0;
`;
