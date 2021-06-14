import {SET_PROFILE} from './constants';

export function setProfile(values: Partial<User>): SetUserAction {
  return {
    type: SET_PROFILE,
    payload: values,
  };
}
