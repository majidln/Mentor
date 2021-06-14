import {ADD_NEW_GROUP} from './constants';

export function addGroup(list: Array<Employee>): AddGroupAction {
  return {
    type: ADD_NEW_GROUP,
    payload: list,
  };
}
