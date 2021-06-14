import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/index';
import {store, persistor} from './store/index';
import AppTheme from './services/theme';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" />}
        persistor={persistor}>
        <NavigationContainer theme={AppTheme}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
