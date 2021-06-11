export interface LatLang {
  latitude: number;
  longitude: number;
}

export interface User {
  firstName: string;
  lastName: string;
  currentLocation: LatLang;
  picture: string;
  department: string;
  jobTitle: string;
}

export interface SetUserAction {
  type: string;
  payload?: Partial<User>;
}

export type UserReducer = User;
