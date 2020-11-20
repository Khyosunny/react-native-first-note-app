import React, { useContext, useState }from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

import { DataContext } from '../../App';
import CreateCategoryModal from './CreateCategoryModal.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default ({ onModalInvisible }) => {
  const post = useContext(DataContext);
  const { setCategoryChange, categories } = post

  const [createCategoryModalVisible, setCreateCategoryModalVisible] = useState(false);
  
  const onModalCreateCateInvisible = () => {
    setCreateCategoryModalVisible(!createCategoryModalVisible);
  };

  const onCategoryChange = (item) => {
    setCategoryChange(item);
    onModalInvisible();
  };

  return (
    <CenteredView>
      <ModalView>
        <Title>카테고리 선택하기</Title>
        <Modal 
          visible={createCategoryModalVisible} 
          transparent={true} 
          onRequestClose={onModalCreateCateInvisible}
        >
          <CreateCategoryModal onModalCreateCateInvisible={onModalCreateCateInvisible}/>
        </Modal>
        <CategoryBox>
        {
          categories && categories.map((item)=>{
            return (
              <AlignBox 
                onPress={() => {
                  onCategoryChange(item)
                }} 
                key={item}
              >
                <Icon name="bookmark" color="#666" size={30}/>
                <Category>{item}</Category>
              </AlignBox>
            )
          })
        }
          <Container onPress={() => {setCreateCategoryModalVisible(true)}}>
            <Icon name="plus" color="green" size={30}/>
            <CategoryAdd>카테고리 추가</CategoryAdd>
          </Container>
        </CategoryBox>
      </ModalView>
    </CenteredView>
  )
}

const CategoryAdd = styled.Text`
  font-size: 22px;
  margin-left: 10px;
`;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 0;
`;

const Category = styled.Text`
  font-size: 22px;
  margin-left: 20px;
`;

const AlignBox = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  padding: 20px 0;
  align-items: center;
`;

const CategoryBox = styled.View`
  background-color: #fff;
  padding: 0 20px;
  border-radius: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const ModalView = styled.View`
  width: 100%;
  padding: 30px 20px;
  border-radius: 30px;
  background-color: #fff;
`;

const CenteredView = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;
`;