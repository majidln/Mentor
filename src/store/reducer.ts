import {combineReducers} from 'redux';
import user from './user/reducer';
import group from './group/reducer';

const appReducer = combineReducers({
  user,
  group,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
