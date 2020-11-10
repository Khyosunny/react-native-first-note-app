import React, { useContext, useEffect, useState } from 'react';
import { ToastAndroid, Modal } from 'react-native';
import styled from 'styled-components';

import { DataContext } from '../App';
import SaveButton from '../components/SaveButton';
import CategoryButton from '../components/CategoryButton';
import SelectCategory from '../components/modal/SelectCategory';

export default ({navigation, route}) => {
  const post = useContext(DataContext);
  const { dispatch, categoryChange } = post
  const { id, title, note } = route.params

  const [titleValue, setTitleValue] = useState(title);
  const [noteValue, setNoteValue] = useState(note);
  const [modalVisible, setModalVisible] = useState(false);
  
  const showToast = () => {
    ToastAndroid.show('입력한 내용이 없어 노트를 저장하지 않았어요.', ToastAndroid.SHORT);
  };

  const onModalInvisible  = () => {
    setModalVisible(!modalVisible);
  }

  const onModalVisible = () => {
    setModalVisible(true)
  }

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
        category: categoryChange
      })
    }
    navigation.goBack();
  }


  return (
    <Container>
      <Nav>
        <SaveButton event={onUpdate} />
      </Nav>

      <Modal visible={modalVisible} transparent={true} onRequestClose={onModalInvisible}>
        <SelectCategory onModalInvisible={onModalInvisible} />
      </Modal>

      <CategoryButton onModalVisible={onModalVisible} categoryChange={categoryChange} />
      <TitleInput onChangeText={(title) => {setTitleValue(title)}} value={titleValue} placeholder="제목"/>
      <NoteInput onChangeText={(note) => {setNoteValue(note)}} value={noteValue} autoFocus={true} textAlignVertical="top" placeholder="내용" multiline={true}/>
    </Container>
  )
}


const TitleInput = styled.TextInput`
  font-size: 22px;
  font-weight: 900;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  background-color: #fff;
`;

const NoteInput = styled.TextInput`
  font-size: 18px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
`;

const Nav = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  height: 50px;
  flex-direction: row;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;