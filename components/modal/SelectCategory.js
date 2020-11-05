import React, { useContext, useState }from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';
import CreateCategory from './CreateCategory'
import { DataContext } from '../../App';


const ModalText = styled.Text`
  font-size: 18px;
`;

const Select = styled.TouchableOpacity`
  border-top-width: 1px;
  border-color: #dbdbdb;
  padding: 12px 0;
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

export default ({ onModalInvisible }) => {
  const post = useContext(DataContext);
  const { setCategoryChange, setCategorys, categorys } = post

  const [modalCreateCateVisible, setModalCreateCateVisible] = useState(false);

  
  const onModalCreateCateInvisible  = () => {
    setModalCreateCateVisible(!modalCreateCateVisible);
  }
  const onCategoryChange = (item) => {
    setCategoryChange(item)
    onModalInvisible()
  }
  return (
    <CenteredView>
      <ModalView>
        <ModalTitle>카테고리 선택하기</ModalTitle>
        <Modal visible={modalCreateCateVisible} transparent={true} onRequestClose={onModalCreateCateInvisible}>
          <CreateCategory categorys={categorys} setCategorys={setCategorys} onModalCreateCateInvisible={onModalCreateCateInvisible}/>
        </Modal>
        {
          categorys && categorys.map((item, i)=>{
            return (
            <Select onPress={()=>{onCategoryChange(item)}} key={i}>
              <ModalText>{item}</ModalText>
            </Select>
            )
          })
        }
        <Select onPress={() => {setModalCreateCateVisible(true)}} >
          <ModalText>＋ 카테고리 추가</ModalText>
        </Select>
      </ModalView>
    </CenteredView>
  )
}
