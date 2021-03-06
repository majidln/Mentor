import * as constants from './constants';

const initialState: User = {
  firstName: '',
  lastName: '',
  picture: '',
  location: {
    latitude: 0,
    longitude: 0,
  },
  department: '',
  jobTitle: '',
};

export default function reducer(
  state: User = initialState,
  action: SetUserAction,
): UserReducer {
  switch (action.type) {
    case constants.SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
