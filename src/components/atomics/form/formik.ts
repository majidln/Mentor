import {View} from 'react-native';
import {withNextInputAutoFocusForm} from 'react-native-formik';
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withInputTypePropsProps,
  setFormikInitialValueProps,
} from 'react-native-formik';
import {compose} from 'recompose';

import {UserInput, UserInputProps} from './input';

export interface FormikInputProps
  extends UserInputProps,
    withInputTypePropsProps,
    setFormikInitialValueProps {}

export const FormikInput = compose<UserInputProps, FormikInputProps>(
  handleTextInput,
  withNextInputAutoFocusInput,
)(UserInput);

export const InputsContainer = withNextInputAutoFocusForm(View);
