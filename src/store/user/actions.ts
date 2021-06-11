import {SET_PROFILE} from './constants';
import {SetUserAction, User} from './type';

export function setProfile(values: Partial<User>): SetUserAction {
  return {
    type: SET_PROFILE,
    payload: values,
  };
}
