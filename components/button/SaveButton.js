import React from 'react';
import styled from 'styled-components';

export default ({event}) => {

  return (
    <SaveButton onPress={event}>
      <SaveButtonText>저장</SaveButtonText>
    </SaveButton>
  )
}

const SaveButtonText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
`;

const SaveButton = styled.TouchableOpacity`
  width: 60px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;