import React, { useContext, useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { DataContext } from '../../App';
import { TopMenu, TitleInput, NoteInput, UpdatePageContainer } from './UpdatePageStyle';
import SaveButton from '../../components/SaveButton';

export default ({navigation, route}) => {
  const post = useContext(DataContext);
  const { dispatch } = post
  const { id, title, note } = route.params
  
  const [titleValue, setTitleValue] = useState(title);
  const [noteValue, setNoteValue] = useState(note);
  
  const showToast = () => {
    ToastAndroid.show('입력한 내용이 없어 노트를 저장하지 않았어요.', ToastAndroid.SHORT);
  };


  console.log(id)

  const onUpdate = () => {
    if( titleValue === '' && noteValue === '' ) {
      dispatch({
        type: 'REMOVE_CONTENT',
        id
      })
      showToast();
    } else {
      dispatch({
        type: 'UPDATE_CONTENT',
          id,
          title: titleValue,
          note: noteValue,
      })
    }
    navigation.goBack();
  }


  return (
      <UpdatePageContainer>
        <TopMenu>
          <SaveButton event={onUpdate} />
        </TopMenu>
 
      <TitleInput onChangeText={(title) => {setTitleValue(title)}} value={titleValue} placeholder="제목"/>
      <NoteInput onChangeText={(note) => {setNoteValue(note)}} value={noteValue} autoFocus={true} textAlignVertical="top" placeholder="내용" multiline={true}/>
    </UpdatePageContainer>
  )
}