interface LatLang {
  latitude: number;
  longitude: number;
}

interface User {
  firstName: string;
  lastName: string;
  location: LatLang;
  picture: string;
  department: string;
  jobTitle: string;
}

interface SetUserAction {
  type: string;
  payload?: Partial<User>;
}

type UserReducer = User;

interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  department: string;
  job_title: string;
  country: string;
  city: string;
}
