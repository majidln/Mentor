import * as Yup from 'yup';
import {FormikHelpers} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import {setProfile} from './../store/user/actions';
import {RootState} from './../store/reducer';

const FormSchema = Yup.object().shape({
  department: Yup.string().label('Department').min(2).required(),
  jobTitle: Yup.string().label('Job Title').min(2).required(),
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
