import React from 'react';
import { CreateButtonContainer, Plus } from './CreateButtonStyle';

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