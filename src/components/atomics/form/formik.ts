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
import {ImageInput, ImageInputProps} from './image';
import {LocationInput, LocationInputProps} from './location';

export interface FormikInputProps
  extends UserInputProps,
    withInputTypePropsProps,
    setFormikInitialValueProps {}

export const FormikInput = compose<UserInputProps, FormikInputProps>(
  handleTextInput,
  withNextInputAutoFocusInput,
)(UserInput);

export const FormikImagePicker = compose<ImageInputProps, FormikInputProps>(
  handleTextInput,
  withNextInputAutoFocusInput,
)(ImageInput);

export const FormikLocationInput = compose<
  LocationInputProps,
  FormikInputProps
>(
  handleTextInput,
  withNextInputAutoFocusInput,
)(LocationInput);

export const InputsContainer = withNextInputAutoFocusForm(View);
