import * as Yup from 'yup';
import {FormikHelpers} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {setProfile} from '../store/user/actions';
import {RootState} from '../store/reducer';

export enum UserFormStep {
  ONE = 'One',
  TWO = 'Two',
}

const StepOneFormSchema = Yup.object().shape({
  firstName: Yup.string().label('First Name').min(2).required(),
  lastName: Yup.string().label('Last Name').min(2).required(),
  location: Yup.object().shape({
    latitude: Yup.number().label('Latitude').required(),
    longitude: Yup.number().label('Longitude').required(),
  }),
  picture: Yup.string().label('Picture').min(2).required(),
});

const StepTwoFormSchema = Yup.object().shape({
  department: Yup.string().label('Department').min(2).required(),
  jobTitle: Yup.string().label('Job Title').min(2).required(),
});

interface StepOneHook {
  onSubmit(form: Partial<User>, actions: FormikHelpers<Partial<User>>): void;
  initialValues: Partial<User>;
  validationSchema: Yup.InferType<
    typeof StepOneFormSchema | typeof StepTwoFormSchema
  >;
}

export const useForm = (step: UserFormStep): StepOneHook => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
      navigation.navigate('FormStepTwoScreen');
    }, 500);
  };

  return {
    onSubmit,
    initialValues,
    validationSchema:
      step === UserFormStep.ONE ? StepOneFormSchema : StepTwoFormSchema,
  };
};
