import React, { useContext, useState }from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';
import CreateCategory from './CreateCategory'


const ModalText = styled.Text`
  font-size: 18px;
`;

const Select = styled.TouchableOpacity`
  border-top-width: 1px;
  border-color: #999;
  background-color: pink;
  padding: 10px 0;
`;

const ModalTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
  align-self: flex-start;
  margin-bottom: 20px;
`;

const ModalView = styled.View`
  width: 80%;
  padding: 30px;
  background-color: #fff;

`;

const CenteredView = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;

`;

export default () => {
  const [modalCreateCateVisible, setModalCreateCateVisible] = useState(false);

  
  const onModalCreateCateInvisible  = () => {
    setModalCreateCateVisible(!modalCreateCateVisible);
  }

  return (
    <CenteredView>
      <ModalView>
        <ModalTitle>카테고리 선택하기</ModalTitle>
        <Modal visible={modalCreateCateVisible} transparent={true} onRequestClose={onModalCreateCateInvisible}>
          <CreateCategory onModalCreateCateInvisible={onModalCreateCateInvisible}/>
        </Modal>
        <Select onPress={() => {setModalCreateCateVisible(true)}} >
          <ModalText>＋ 카테고리 추가</ModalText>
        </Select>
      </ModalView>
    </CenteredView>
  )
}
