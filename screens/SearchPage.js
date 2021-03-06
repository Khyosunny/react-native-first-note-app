import React, { useState, useContext, useEffect } from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components';

import { DataContext } from '../App';
import BackButton from '../components/button/BackButton'
import SearchCard from '../components/card/SearchCard';


export default ({ navigation }) => {
  const post = useContext(DataContext);
  const { contents } = post
  const [searchData, setSearchData] = useState(null);
  const [input, setInput] = useState('');

  const onBack = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };
  
  const dataFilter = (text) => {
    if (text !== '') {
      const arr = contents.filter((item) => {
        return (!(item.title.indexOf(text) === -1) || !(item.note.indexOf(text) === -1)) ? item : null
      });
      if (arr.length > 0) {
        setSearchData(arr);
      } else {
        setSearchData(null);
      }
    } else {
      setSearchData(null);
    }
  };

  const onChange = (text) => {
    setInput(text);
  };

  useEffect(() => {
    dataFilter(input);
  }, [input,contents]);
  
  return (
      <Container>
        <Nav>
          <BackButton event={onBack}/>
          <SearchInput onChangeText={(t) => { onChange(t) }} autoFocus={true} placeholder="검색"/>
        </Nav>
        <CardScroll>
          {
            searchData ? 
            searchData.map((item) => { 
                return <SearchCard item={item} key={item.id} navigation={navigation}/>
              })
            : <NoSearch>검색 결과가 없습니다.</NoSearch>
          }
        </CardScroll>
      </Container>
  )
}

const CardScroll = styled.ScrollView`
  width: 100%;
  background-color: #F6EEEA;
`;

const NoSearch = styled.Text`
  font-size: 20px;
  text-align: center;
  padding-top: 60px;
  color: #333;
`;

const SearchInput = styled.TextInput`
  width: 80%;
  height: 46px;
  background-color: #F6EEEA;
  border-radius: 15px;
  padding: 0 10px;
  font-size: 18px;
`;

const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  height: 60px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #F6EEEA;
`;