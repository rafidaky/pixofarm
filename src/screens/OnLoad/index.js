import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setPictures} from '../../actions';
import {useNavigation} from '@react-navigation/core';

const OnLoad = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const pictures = await AsyncStorage.getItem('pictures');
      if (pictures !== null) {
        let oldPics = JSON.parse(pictures).pictures;
        dispatch(setPictures(oldPics));
        setTimeout(() => {
          navigation.push('MapScreen');
        }, 2000);
      } else {
        navigation.push('MapScreen');
      }
    } catch (e) {
      console.log(e);
      navigation.push('MapScreen');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return null;
};

export default OnLoad;
