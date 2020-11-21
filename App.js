import React, { useEffect, useReducer, useRef, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';

export const DataContext = React.createContext();

const initialState = {
  isLoading : false,
  inputs: {
    title: '',
    note: '',
  },
  contents : [
    {
      id: 4,
      title: "네번째 제목",
      note: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      active: false,
      category: "공부",
      date: "2020년 11월 18일"
    },
    {
      id: 3,
      title: "세번째 제목",
      note: "내용",
      active: false,
      category: "공부",
      date: "2020년 11월 06일"
    },
    {
      id: 2,
      title: "두번째 제목",
      note: "내용",
      active: false,
      category: "공부",
      date: "2020년 11월 02일"
    },
    {
      id: 1,
      title: "첫번째 제목",
      note: "내용",
      active: false,
      category: "일정",
      date: "2020년 11월 01일"
    }
  ],
  selectCategory: '',
  allSelect: false
}

function reducer(state, action){
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state, 
        isLoading: true
      }
    case 'FINISH_LOADING':
      return {
        ...state,
        isLoading: false
      }
    case 'TITLE_VALUE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          title: action.title
        }
      }
    case 'NOTE_VALUE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          note: action.note
        }
      }
    case 'CREATE_CONTENT':
      return {
        ...state,
        // contents: state.contents.concat(action.content),
        contents: [
          action.content,
          ...state.contents
        ],
        inputs: {
          title: '',
          note: '',
        }
      }
    case 'UPDATE_CONTENT':
      return {
        ...state,
        contents: state.contents.map((item) => 
          item.id === action.id ? {...item, title: action.title, note: action.note, category: action.category}
          : item
        )
      }
    case 'REMOVE_CONTENT':
      return {
        ...state,
        contents: state.contents.filter(item => item.id !== action.id)
      }
    case 'ACTIVE_LONG':
      return {
        ...state,
        contents: state.contents.map((item) => 
          item.id === action.id ? {...item, active: true}
        : item
        )
      }
    case 'ACTIVE_TOGGLE':
      return {
        ...state,
        contents: state.contents.map((item) => 
          item.id === action.id ? {...item, active: !item.active}
        : item
        ),
        allSelect: false
      }
    case 'SELECT_DELETE':
      return {
        ...state,
        contents: state.contents.filter(item => item.active === false),
        allSelect: false
      }
    case 'SELECT_CANCLE':
      return {
        ...state,
        contents: state.contents.map((item) => ({ ...item, active: false })),
        allSelect: false
      }
    case 'ALL_SELECT_TRUE':
      return {
        ...state,
        contents: state.contents.map((item) => ({ ...item, active: true })),
        allSelect: true
      }
    case 'ALL_SELECT_TOGGLE':
      return {
        ...state,
        contents: state.contents.map((item) => ({ ...item, active: item.active ? !item.active : false })),
        allSelect: !state.allSelect
      }
    case 'CATEGORY_FILTER':
      return {
        ...state,
        selectCategory: action.category
      }
    default:
      return state
  }
}

export default () => {
  const nextID = useRef(5)

  const [data, dispatch] = useReducer(reducer, initialState)
  const { contents, isLoading, allSelect, selectCategory } = data
  const { title, note } = data.inputs
  
  const [categories, setCategories] = useState(['공부', '일정'])
  const [categoryChange, setCategoryChange] = useState('카테고리 미지정')
  const [onLong, setOnLong] = useState(false)

  const [categoryContents, setCategoryContents] = useState(null)
  const contentsLength = categoryContents === null ? 0 : categoryContents.length
  
  const categoryFilter = (cate) => {
    const arr = contents.filter((item) => {
      return cate === '' || item.category === cate
    });
    if (arr.length > 0) {
      setCategoryContents(arr);
    } else {
      setCategoryContents(null);
    }
  };

  useEffect(() => {
    categoryFilter(selectCategory);
  }, [selectCategory, contents])
 
  return (
    <DataContext.Provider
      value={{ contentsLength, categoryContents, selectCategory, allSelect, contents, dispatch, title, note, nextID, isLoading, categories, setCategories, categoryChange, setCategoryChange, onLong, setOnLong }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </DataContext.Provider>
  )
}