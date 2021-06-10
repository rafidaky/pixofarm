import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {RNCamera} from 'react-native-camera';
import {layout} from '../../theme/layout';
import {addToPictures} from '../../actions';

const CameraScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const askPermission = () => {
    check(PERMISSIONS.IOS.CAMERA)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            request(PERMISSIONS.IOS.CAMERA).then(result => {});
            break;
          case RESULTS.DENIED:
            request(PERMISSIONS.IOS.CAMERA)
              .then(result => {})
              .catch(err => {
                console.log(err);
              });
            break;
          case RESULTS.LIMITED:
            request(PERMISSIONS.IOS.CAMERA).then(result => {
              console.log(result);
            });
            break;
          case RESULTS.GRANTED:
            getCoordinates();
            break;
          case RESULTS.BLOCKED:
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    askPermission();
  }, []);

  const cameraRef = useRef();

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync();
      dispatch(addToPictures(data));
      navigation.pop();
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => takePicture()} style={styles.button}>
          <Text style={styles.buttonText}>CAPTURE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
