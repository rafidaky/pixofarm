import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  image: {
    width: '40%',
    height: '80%',
  },
  historyContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  dateText: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 20,
  },
});

export default styles;
