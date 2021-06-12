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
import {useSelector} from 'react-redux';
import axios from 'axios';

const HistoryScreen = () => {
  const pictures = useSelector(state => state.userReducer.pictures);

  const [dynamicPics, setDynamicPics] = useState([]);

  useEffect(() => {
    setDynamicPics([]);
    let temp = [...pictures];
    temp.sort(function (a, b) {
      return new Date(b.takenTime) - new Date(a.takenTime);
    });
    temp.map(item => {
      axios
        .get('http://api.weatherbit.io/v2.0/current', {
          params: {
            key: '29b4d4d9708f45beae17ebe668dfa6f9',
            lat: item.coords.latitude,
            lon: item.coords.longitude,
          },
        })
        .then(resp => {
          item.temp = resp.data.data[0].temp;
        });
    });
    setDynamicPics(temp);
    setTimeout(() => {
      setDynamicPics(temp);
    }, 1000);
  }, [pictures]);

  const sync = () => {
    axios
      .post('https://this.is.a.test/')
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        {dynamicPics.map(item => {
          return (
            <View style={styles.historyContainer}>
              <Image
                style={styles.image}
                source={{uri: item.uri?.toString()}}></Image>
              <View>
                <Text style={styles.dateText}>
                  {new Date(item.takenTime).toLocaleString()}
                </Text>
                <Text style={styles.dateText}>
                  {'Temp: ' + (item.temp ? item.temp : '')}
                </Text>
              </View>
            </View>
          );
        })}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            sync();
          }}>
          <Text style={styles.buttonText}>SYNC NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
