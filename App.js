import React, { useEffect, useReducer, useRef, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export const DataContext = React.createContext();

const initialState = {
  isLoading : false,
  inputs: {
    title: '',
    note: ''
  },
  updateInputs: {
    title: '',
    note: ''
  },
  contents : [
    {
      id: 2,
      title: "두번째 제목",
      note: "내용",
      active: false,
      category: '',
      date: "2020년 10월 29일"
    },
    {
      id: 1,
      title: "첫번째 제목",
      note: "내용",
      active: false,
      category: '',
      date: "2020년 10월 29일"
    }
  ]
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
          note: ''
        }
      }
    case 'UPDATE_MOUNT':
      return {
        ...state,
        isLoading: false,
        updateInputs: {
          title: action.title,
          note: action.note
        }
      }
    case 'UPDATE_TITLE':
      return {
        ...state,
        updateInputs: {
          ...state.updateInputs,
          title: action.title
        }
      }
    case 'UPDATE_NOTE':
      return {
        ...state,
        updateInputs: {
          ...state.updateInputs,
          note: action.note
        }
      }
    case 'UPDATE_CONTENT':
      return {
        ...state,
        contents: state.contents.map((item) => 
          item.id === action.id ? {...item, title: action.title, note: action.note}
          : item
        )
      }
    case 'REMOVE_CONTENT':
      return {
        ...state,
        contents: state.contents.filter(item => item.id !== action.id )
      }
    default:
      return state
  }
}

export default () => {

  const nextID = useRef(3)

  const [data, dispatch] = useReducer(reducer, initialState)
  const { contents, isLoading, updateInputs } = data
  const { title, note } = data.inputs

  useEffect(() => {
    dispatch({type: 'START_LOADING'})
    setTimeout(() => {
      dispatch({type: 'FINISH_LOADING'})
    },300)
  }, [])
 
  return isLoading ? <Text>로딩 중</Text> : (
    <DataContext.Provider value={{contents, dispatch, title, note, nextID, updateInputs, isLoading }}>
      <NavigationContainer>
        <StatusBar style="black" />
        <StackNavigator />
      </NavigationContainer>
    </DataContext.Provider>
  )
}