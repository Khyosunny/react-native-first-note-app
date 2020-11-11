import React, { useEffect, useReducer, useRef, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
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
      date: "2020년 11월 06일"
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
      date: "2020년 10월 29일"
    },
    {
      id: 1,
      title: "첫번째 제목",
      note: "내용",
      active: false,
      category: "일정",
      date: "2020년 10월 29일"
    }
  ],
  searchResult: null
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
        contents: state.contents.filter(item => item.id !== action.id )
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
        )
      }
    case 'SELECT_DELETE':
      return {
        ...state,
        contents: state.contents.filter(item => item.active === false)
      }
    case 'SELECT_CANCLE':
      return {
        ...state,
        contents: state.contents.map((item) => ({...item, active:false}))
      }
    // case 'SEARCH_RESULT':
    //   return {
    //     ...state,
    //     searchResult: state.contents.filter((item) => {
    //       return (!(item.title.indexOf(action.text) === -1) || !(item.note.indexOf(action.text) === -1)) ? item : null
    //     })
    //   }
    default:
      return state
  }
}

export default () => {
  const nextID = useRef(5)

  const [data, dispatch] = useReducer(reducer, initialState)
  const { contents, isLoading, searchResult } = data
  const { title, note } = data.inputs

  const [categorys, setCategorys] = useState(['공부', '일정'])
  const [categoryChange, setCategoryChange] = useState('카테고리 미지정')
  const [ onLong, setOnLong ] = useState(false)

  // useEffect(() => {
  //   dispatch({type: 'START_LOADING'})
  //   setTimeout(() => {
  //     dispatch({type: 'FINISH_LOADING'})
  //   },300)
  // }, [])
 
  return (
    <DataContext.Provider value={{searchResult, contents, dispatch, title, note, nextID, isLoading, categorys, setCategorys, categoryChange, setCategoryChange, onLong, setOnLong}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </DataContext.Provider>
  )
}