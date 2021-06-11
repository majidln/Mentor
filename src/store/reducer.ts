import {combineReducers} from 'redux';
import user from './user/reducer';

const appReducer = combineReducers({
  user,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
