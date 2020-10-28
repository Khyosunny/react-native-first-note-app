import React from 'react';
import { CreateButtonContainer, Plus } from './CreateButtonStyle';

export default ({navigation}) => {

  return (
    <CreateButtonContainer onPress={() => {navigation.navigate('CreatePage')}}>
      <Plus>＋</Plus>
    </CreateButtonContainer>
  )
}