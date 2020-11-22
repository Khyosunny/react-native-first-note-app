import React, { useContext, useState } from 'react';
import { Modal } from 'react-native';
import moment from 'moment';
import styled from 'styled-components';

import { DataContext } from '../App';
import SaveButton from '../components/button/SaveButton';
import BackButton from '../components/button/BackButton';
import CategoryButton from '../components/CategoryButton';
import SelectCategory from '../components/modal/SelectCategoryModal';

export default ({ navigation }) => {
  const post = useContext(DataContext);
  const { title, note, dispatch, nextID, categoryChange } = post
  const [modalVisible, setModalVisible] = useState(false);

  const hours = moment().hours();
  const minutes = moment().minutes();

  const onBack = () => {
    navigation.goBack();
  };

  const onModalInvisible = () => {
    setModalVisible(!modalVisible);
  };

  const onModalVisible = () => {
    setModalVisible(true);
  };

  const onCreate = () => {
    dispatch({
      type: 'CREATE_CONTENT',
      content: {
        id: nextID.current,
        title,
        note,
        active: false,
        date: `${hours < 12 ? '오전' : '오후'} ${hours < 10 ? `0${hours}` : hours > 12 ? `0${hours - 12}` : hours } : ${minutes < 10 ? `0${minutes}` : minutes}`,
        category: categoryChange,
      }
    });
    nextID.current += 1;
    dispatch({ type: 'START_CONTENTS' });
    navigation.goBack();
  };

  return (
    <Container>
      <Nav>
        <BackButton event={onBack} />
        <SaveButton event={onCreate} />
      </Nav>

      <Modal visible={modalVisible} transparent={true} onRequestClose={onModalInvisible}>
        <SelectCategory onModalInvisible={onModalInvisible} />
      </Modal>

      <CategoryButton onModalVisible={onModalVisible} categoryChange={categoryChange} />

      <TitleInput onChangeText={(title) => { dispatch({ type: 'TITLE_VALUE', title }) }} value={title} placeholder="제목" />
      <NoteInput onChangeText={(note) => { dispatch({ type: 'NOTE_VALUE', note }) }} value={note} autoFocus={true} textAlignVertical="top" placeholder="내용" multiline={true} />
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
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
