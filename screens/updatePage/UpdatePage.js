import React, { useContext, useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { DataContext } from '../../App';
import { TopMenu, TitleInput, NoteInput, UpdatePageContainer } from './UpdatePageStyle';
import SaveButton from '../../components/saveButton/SaveButton';

export default ({navigation, route}) => {
  const post = useContext(DataContext);
  const { dispatch, updateInputs, contents } = post
  const { id } = route.params
  

  const showToast = () => {
    ToastAndroid.show('입력한 내용이 없어 노트를 저장하지 않았어요.', ToastAndroid.SHORT);
  };


  console.log(id)

  const onUpdate = () => {
    if( updateInputs.title === '' && updateInputs.note === '' ) {
      dispatch({
        type: 'REMOVE_CONTENT',
        id
      })
      showToast();
    } else {
      dispatch({
        type: 'UPDATE_CONTENT',
          id,
          title: updateInputs.title,
          note: updateInputs.note,
      })
    }
    navigation.goBack();
  }


  return (
      <UpdatePageContainer>
        <TopMenu>
          <SaveButton event={onUpdate} />
        </TopMenu>
 
      <TitleInput onChangeText={(title) => {dispatch({type: 'UPDATE_TITLE', title})}} value={updateInputs.title} placeholder="제목"/>
      <NoteInput onChangeText={(note) => {dispatch({type: 'UPDATE_NOTE', note})}} value={updateInputs.note} textAlignVertical="top" placeholder="내용" multiline={true}/>
    </UpdatePageContainer>
  )
}