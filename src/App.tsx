import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/index';
import {store, persistor} from './store/index';
import AppTheme from './services/theme'

export default function App() {
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
