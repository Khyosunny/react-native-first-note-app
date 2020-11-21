import React, { useEffect, useState} from 'react';
import styled from 'styled-components';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default ({item, event, contents}) => {
  const [count, setCount] = useState(0)

  const counter = () => {
    const arr = contents.filter((i) => {
      return i.category === item
    });
    setCount(arr.length);
  };

  useEffect(() => {
    counter();
  },[contents])

  return (
    <DrawerMenu 
      activeOpacity={1}
      underlayColor="rgba(0,0,0,0.3)"
      onPress={() => { event(item) }}
    >
      <AlignBox>
        <Icon style={{flex: 1, marginLeft: 30}} name="bookmark" color="#666" size={30}/>
        <DrawerTitle>{item}</DrawerTitle>
        <CategoryLength>{count}</CategoryLength>
      </AlignBox>
    </DrawerMenu>
  )
}


const CategoryLength = styled.Text`
  font-size: 18px;
  color: #666;
  justify-content: flex-end;
  flex: 1;
`;

const DrawerTitle = styled.Text`
  flex: 4;
  font-size: 22px;
`;

const AlignBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const DrawerMenu = styled.TouchableHighlight`
  flex-direction: row;
  width: 96%;
  height: 50px;
`;