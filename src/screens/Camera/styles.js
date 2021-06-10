import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Poppins-Light',
  },
});

export default styles;
