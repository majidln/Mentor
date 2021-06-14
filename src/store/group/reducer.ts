import * as constants from './constants';

const initialState: Array<Array<Employee>> = [];

export default function reducer(
  state = initialState,
  action: AddGroupAction,
): UserReducer {
  switch (action.type) {
    case constants.ADD_NEW_GROUP:
      return [...state, action.payload];
    default:
      return state;
  }
}
