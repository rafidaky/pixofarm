import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigator from './src/navigation/tabNavigator';
import {compose, createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import {NavigationContainer} from '@react-navigation/native';
import thunk from 'redux-thunk';

const App = () => {
  LogBox.ignoreAllLogs(true);

  const middleware = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <TabNavigator />
          <StatusBar barStyle="dark-content" />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
