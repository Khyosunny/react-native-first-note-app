import React from 'react';
import { Animated, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Hamburger from '../../assets/Hamburger.png';
import Search from '../../assets/Search.png';
import Dot from '../../assets/Dot.png';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


export default ({animatedValue, navigation, contentsLength}) => {
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  });

  const titleText = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [30, 26, 0],
    extrapolate: 'clamp'
  });

  const titleText2 = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [0, 10, 24],
    extrapolate: 'clamp'
  });

  const miniTitleSize = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [20, 18, 0],
    extrapolate: 'clamp'
  });

  const textOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp'
  });

  const textOpacity2 = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp'
  });
  return (
    <Animated.View style={[styles.container, {height: headerHeight}]}>
      <Animated.Text style={[styles.title, {fontSize: titleText, opacity : textOpacity}]}>나의 노트</Animated.Text>
      <Animated.Text style={[styles.miniTitle, {fontSize: miniTitleSize, opacity : textOpacity}]}>노트 {contentsLength}개</Animated.Text>
      <View style={styles.iconBox}>
        
        <View style={styles.iconLeftBox}>
          <TouchableOpacity style={styles.iconArea} >
            <Image style={styles.hamburgerIcon} source={Hamburger} />
          </TouchableOpacity>
          <Animated.Text style={[styles.title2, {fontSize: titleText2, opacity : textOpacity2}]}>나의 노트</Animated.Text>
        </View>

        <View style={styles.iconRightBox}>
          <TouchableOpacity style={styles.iconArea} onPress={() => {navigation.navigate('SearchPage')}}>
            <Image style={styles.searchIcon} source={Search} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconArea}>
            <Image style={styles.dotIcon} source={Dot} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#eae9ef',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  title2: {
    marginLeft: 20,
  },
  miniTitle: {
    color: '#828282',
    fontSize: 20,
    textAlign: 'center',
  },
  iconBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    left: 0,
    bottom: 5,
  },
  iconLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconRightBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  dotIcon: {
    width: 30,
    height: 30,
  },
  iconArea: {
    padding: 10,
  }
})