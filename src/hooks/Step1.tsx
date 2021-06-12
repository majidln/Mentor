import * as Yup from 'yup';
import {FormikHelpers} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import {setProfile} from './../store/user/actions';
import {RootState} from './../store/reducer';

const FormSchema = Yup.object().shape({
  firstName: Yup.string().label('First Name').min(2).required(),
  lastName: Yup.string().label('Last Name').min(2).required(),
  // currentLocation: Yup.object().shape({
  //   latitude: Yup.number().label('Latitude').required(),
  //   longitude: Yup.number().label('Longitude').required(),
  // }),
  picture: Yup.string().label('Picture').min(2).required(),
});

interface StepOneHook {
  onSubmit(form: Partial<User>, actions: FormikHelpers<Partial<User>>): void;
  initialValues: Partial<User>;
  validationSchema: Yup.InferType<typeof FormSchema>;
}

export const useForm = (): StepOneHook => {
  const dispatch = useDispatch();
  const preUserData = useSelector((state: RootState) => state.user);

  const initialValues: Partial<User> = preUserData;

  const onSubmit = (
    form: Partial<User>,
    actions: FormikHelpers<Partial<User>>,
  ) => {
    // save the data into redux
    actions.setSubmitting(true);

    console.log('values are: ', form);
    dispatch(setProfile(form));

    setTimeout(() => {
      actions.setSubmitting(false);
    }, 2000);
  };

  return {
    onSubmit,
    initialValues,
    validationSchema: FormSchema,
  };
};
