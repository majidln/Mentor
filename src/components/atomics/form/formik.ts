import {View} from 'react-native';
import {withNextInputAutoFocusForm} from 'react-native-formik';
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withInputTypePropsProps,
  setFormikInitialValueProps,
  withFormikControl,
} from 'react-native-formik';
import {compose} from 'recompose';

import {UserInput, UserInputProps} from './input';
import {ImageInput, ImageInputProps} from './image';

export interface FormikInputProps
  extends UserInputProps,
    withInputTypePropsProps,
    setFormikInitialValueProps {}

export const FormikInput = compose<UserInputProps, FormikInputProps>(
  handleTextInput,
  withNextInputAutoFocusInput,
)(UserInput);

export const InputsContainer = withNextInputAutoFocusForm(View);
export const FormikImagePicker = withFormikControl<ImageInputProps>(ImageInput);
