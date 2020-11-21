import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../assets/back.png';


export default ({event}) => {
  return (
    <Icon onPress={event}>
      <Back source={BackIcon}/>
    </Icon>
  )
}

const Back = styled.Image`
  width: 30px;
  height: 30px;
`;

const Icon = styled.TouchableOpacity`
  padding: 10px;
`;
