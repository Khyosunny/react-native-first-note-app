import React, { useState } from 'react';
import styled from 'styled-components';

export default ({onModalCreateCateInvisible, categories, setCategories}) => {
  const [cateInput, setCateInput] = useState('')

  const onAddCategory = () => {
    setCategories([...categories, cateInput]);
    onModalCreateCateInvisible();
  };

  return (
    <CenteredView>
      <ModalView>
        <ModalTitle>카테고리 추가하기</ModalTitle>
        <CreateCategoryInput onChangeText={(category) => {setCateInput(category)}} value={cateInput} autoFocus={true} placeholder="카테고리 명을 입력하세요."/>

        <SelectButtonBox>
          <Select onPress={onModalCreateCateInvisible}>
            <SelectText style={{ color: 'red' }}>취소</SelectText>
          </Select>
          <Select onPress={onAddCategory}>
            <SelectText style={{ color: 'green' }}>완료</SelectText>
          </Select>
        </SelectButtonBox>

      </ModalView>
    </CenteredView>
  )
}


const SelectText =styled.Text`
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;

const Select = styled.TouchableOpacity`
  padding: 0 40px;
  height: 30px;
  margin-top: 20px;
`;

const SelectButtonBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CreateCategoryInput = styled.TextInput`
  width: 100%
  border-bottom-width: 1px;
  border-color: #999;
  padding: 5px;
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
  margin-bottom: 50px;
`;

const CenteredView = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.6);
  justify-content: flex-end;
  align-items: center;

`;