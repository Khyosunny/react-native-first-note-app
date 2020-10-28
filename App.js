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
  contents : [
    {
      id: 1,
      title: "첫번째 제목",
      text: "내용",
      active: false,
      date: "2020년 10월 29일"
    },
    {
      id: 2,
      title: "두번째 제목",
      text: "내용",
      active: false,
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
          title: action.text
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
    default:
      return state
  }
}

export default () => {
  const nextID = useRef(3)

  const [data, dispatch] = useReducer(reducer, initialState)
  const { contents, isLoading } = data
  const { title, note } = data.inputs

  useEffect(() => {
    dispatch({type: 'START_LOADING'})
    setTimeout(() => {
      dispatch({type: 'FINISH_LOADING'})
    },300)
  }, [])
 
  return isLoading ? <Text>로딩 중</Text> : (
    <DataContext.Provider value={{contents, dispatch, title, note, nextID}}>
      <NavigationContainer>
        <StatusBar style="black" />
        <StackNavigator />
      </NavigationContainer>
    </DataContext.Provider>
  )
}