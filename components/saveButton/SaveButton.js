import React from 'react';
import { SaveButtonText, SaveButton } from './SaveButtonStyle';

export default ({event}) => {

  return (
    <SaveButton onPress={event}>
      <SaveButtonText>저장</SaveButtonText>
    </SaveButton>
  )
}