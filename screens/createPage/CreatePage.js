import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { DataContext } from '../../App';
import { TopMenu, TitleInput, NoteInput, CreatePageContainer } from './CreatePageStyle';
import SaveButton from '../../components/saveButton/SaveButton';
import CategoryButton from '../../components/CategoryButton';
import ModalSelectCategory from '../../components/ModalSelectCategory';

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { title, note, dispatch, nextID } = post

  const [modalVisible, setModalVisible] = useState(false);


  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();


  const onModalInvisible  = () => {
    setModalVisible(!modalVisible);
  }

  const onModalVisible = () => {
    setModalVisible(true)
  }

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

      <Modal visible={modalVisible} transparent={true} onRequestClose={onModalInvisible}>
        <ModalSelectCategory />
      </Modal>

      <CategoryButton onModalVisible={onModalVisible}/>

      <TitleInput onChangeText={(title) => {dispatch({type: 'TITLE_VALUE', title})}} value={title} placeholder="제목"/>
      <NoteInput onChangeText={(note) => {dispatch({type: 'NOTE_VALUE', note})}} value={note} textAlignVertical="top" placeholder="내용" multiline={true}/>
    </CreatePageContainer>
  )
}