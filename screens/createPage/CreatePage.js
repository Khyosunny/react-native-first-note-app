import React, { useContext } from 'react';
import { DataContext } from '../../App';
import { TopMenu, SaveButtonText, SaveButton, TitleInput, NoteInput, CreatePageContainer } from './CreatePageStyle';

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { title, note, dispatch, nextID } = post

  const now = new Date();

  const onCreate = () => {
    dispatch({
      type: 'CREATE_CONTENT',
      content: {
        id: nextID.current,
        title,
        text: note,
        active: false,
        date: `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`
      }
    })
    nextID.current += 1;
    navigation.goBack();
  }

  return (
      <CreatePageContainer>
        <TopMenu>
          <SaveButton onPress={onCreate}>
            <SaveButtonText>저장</SaveButtonText>
          </SaveButton>
        </TopMenu>
 
      <TitleInput onChangeText={(text) => {dispatch({type: 'TITLE_VALUE', text})}} value={title} placeholder="제목"/>
      <NoteInput onChangeText={(note) => {dispatch({type: 'NOTE_VALUE', note})}} value={note} textAlignVertical="top" placeholder="내용" multiline={true}/>
    </CreatePageContainer>
  )
}