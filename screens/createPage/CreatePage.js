import React, { useContext } from 'react';
import { DataContext } from '../../App';
import { TopMenu, TitleInput, NoteInput, CreatePageContainer } from './CreatePageStyle';
import SaveButton from '../../components/saveButton/SaveButton';

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { title, note, dispatch, nextID } = post

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();


  const onCreate = () => {
    dispatch({
      type: 'CREATE_CONTENT',
      content: {
        id: nextID.current,
        title,
        note,
        active: false,
        date: `${hours < 12 ? '오전' : '오후'} ${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`
      }
    })
    nextID.current += 1;
    navigation.goBack();
  }

  return (
      <CreatePageContainer>
        <TopMenu>
          <SaveButton event={onCreate}/>
        </TopMenu>
 
      <TitleInput onChangeText={(title) => {dispatch({type: 'TITLE_VALUE', title})}} value={title} placeholder="제목"/>
      <NoteInput onChangeText={(note) => {dispatch({type: 'NOTE_VALUE', note})}} value={note} textAlignVertical="top" placeholder="내용" multiline={true}/>
    </CreatePageContainer>
  )
}