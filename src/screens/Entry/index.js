import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {layout} from '../../theme/layout';
import {login} from '../../actions';

const Entry = () => {
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={false}
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}
        style={styles.wrapper}>
        <View style={styles.marginTop}>
          <Text style={styles.title}>Hi</Text>
          <Text style={styles.title}>Welcome to Pixofarm </Text>
          <Text style={styles.title}>Please login</Text>
        </View>
        <View
          style={[layout.fullWidth, layout.alignItemsCenter, styles.marginTop]}>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            style={styles.input}></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}></TextInput>
          <TouchableOpacity
            onPress={() => {
              onPressLogin();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Entry;
