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
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    marginTop: 20,
    borderColor: 'lightgray',
    paddingHorizontal: 20,
  },
  button: {
    width: '50%',
    height: 40,
    marginTop: 20,
    borderColor: 'lightgray',
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  marginTop: {
    marginTop: 50,
  },
});

export default styles;
