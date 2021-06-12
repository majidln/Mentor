import {applyMiddleware, createStore, Middleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'redux-logger';
import rootReducer from './reducer';

const middleware: Middleware[] = [];

// TODO remove this in the production
middleware.push(logger);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configStore() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);

  return {store, persistor};
}

const {store, persistor} = configStore();
export {store, persistor};
