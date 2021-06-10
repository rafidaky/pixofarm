import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {setCoordinates, addToClickedLocations} from '../../actions';

const MapScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const coords = useSelector(state => state.userReducer);

  const getCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        dispatch(setCoordinates(position));
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const askPermission = () => {
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console
              .log
              // 'This feature is not available (on this device / in this context)',
              ();
            request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
              getCoordinates();
            });
            break;
          case RESULTS.DENIED:
            request(PERMISSIONS.IOS.LOCATION_ALWAYS)
              .then(result => {
                getCoordinates();
              })
              .catch(err => {
                console.log(err);
              });
            console
              .log
              // 'The permission has not been requested / is denied but requestable',
              ();
            break;
          case RESULTS.LIMITED:
            // console.log('The permission is limited: some actions are possible');
            request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
              console.log(result);
              getCoordinates();
            });
            break;
          case RESULTS.GRANTED:
            // console.log('The permission is granted');
            getCoordinates();
            break;
          case RESULTS.BLOCKED:
            // console.log('The permission is denied and not requestable anymore');
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

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        onPress={e => {
          console.log(e.nativeEvent);
          dispatch(addToClickedLocations(e.nativeEvent.coordinate));
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: coords.coordinates.lat,
          longitude: coords.coordinates.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </SafeAreaView>
  );
};

export default MapScreen;
