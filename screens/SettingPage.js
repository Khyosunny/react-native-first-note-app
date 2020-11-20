import React, { useContext, useState } from 'react';
import styled from 'styled-components';


import { DataContext } from '../App';
import BackButton from '../components/button/BackButton';
import CategoryList from '../components/CategoryList';

export default ({navigation}) => {
  const post = useContext(DataContext);
  const { dispatch, contents } = post
  
  const [IsOpen, setIsOpen] = useState(false);

  
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Nav>
        <LeftBox>
          <BackButton event={onBack}/>
          <Title>카테고리 관리</Title>
        </LeftBox>
        <EditButton onPress={() => {setIsOpen(!IsOpen)}}>
          <EditText>편집</EditText>
        </EditButton>
      </Nav>
      <CategoryScroll>
        <CategoryList IsOpen={IsOpen} />
      </CategoryScroll>
    </Container>
  )
}

const CategoryScroll = styled.ScrollView`
  width: 100%;
  padding: 20px;
`;

const EditText = styled.Text`
  font-size: 22px;
  line-height: 50px;
  text-align: center;
`;

const EditButton = styled.TouchableOpacity`
  width: 60px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  line-height: 50px;
  text-align: center;
  margin-left: 20px;
`;

const LeftBox = styled.View`
  flex-direction: row;
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
  background-color: #F6EEEA;
`;