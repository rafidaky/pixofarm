import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {RNCamera} from 'react-native-camera';
import {addToPictures} from '../../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pictures = useSelector(state => state.userReducer.pictures);

  const [localPicture, setLocalPicture] = useState(pictures);

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

  const storeData = async (pictures) => {
    try {
      await AsyncStorage.setItem(
        'pictures',
        JSON.stringify({pictures: pictures}),
      );
    } catch (e) {
      console.log(e);
    }
  };
  const takePicture = async () => {
    if (cameraRef) {
      let data = await cameraRef.current.takePictureAsync();
      data.takenTime = new Date();
      data.coords = props.route.params.coords;
      dispatch(addToPictures(data));
      let temp = [...localPicture];
      temp.push(data);
      storeData(temp);
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
