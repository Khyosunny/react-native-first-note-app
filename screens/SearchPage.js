import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import BackIcon from '../assets/back.png'
import SearchCard from '../components/SearchCard';
import { DataContext } from '../App';


export default ({ navigation }) => {
  const post = useContext(DataContext);
  const { contents, reRender } = post
  const [searchData, setSearchData] = useState(null)
  const [input, setInput] = useState('')
  
  const test = (text) => {
    if (text !== '') {
      const arr = contents.filter((item) => {
        return (!(item.title.indexOf(text) === -1) || !(item.note.indexOf(text) === -1)) ? item : null
      })
      if (arr.length > 0) {
        setSearchData(arr)
      } else {
        setSearchData(null)
      }
    } else {
      setSearchData(null)
    }
  }
  const onChange = (text) => {
    setInput(text)
    test(text)
  }
  useEffect(() => {
    let text = input
    test(text)
   },[reRender])
  return (
      <Container>
        <Nav>
          <Icon onPress={() => { navigation.goBack() }}>
            <Back source={BackIcon}/>
          </Icon>
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

const Back = styled.Image`
  width: 30px;
  height: 30px;
`;

const Icon = styled.TouchableOpacity`
  padding: 10px;
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