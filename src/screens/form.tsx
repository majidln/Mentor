import * as React from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  InputsContainer,
  FormikInput,
  FormikImagePicker,
} from '../components/atomics';
import {useForm} from './../hooks/Step1';

function HomeScreen() {
  const {onSubmit, initialValues, validationSchema} = useForm();

  return (
    <SafeAreaView style={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({values, errors, handleSubmit, isSubmitting}) => (
          <InputsContainer style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.scrollWrapper}>
              <Text>errors: {JSON.stringify(errors)}</Text>
              <Text>values: {JSON.stringify(values)}</Text>
              <FormikInput type="text" name="firstName" label="First Name:" />
              <FormikInput type="text" name="lastName" label="Last Name:" />
              <FormikImagePicker name="picture" label="Take picture of yourself" />
            </KeyboardAwareScrollView>
            <Button
              title={isSubmitting ? 'Loading' : 'Submit'}
              disabled={isSubmitting}
              onPress={handleSubmit}
            />
          </InputsContainer>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 12,
  },
  formWrapper: {
    flex: 1,
  },
  scrollWrapper: {
    flex: 1,
  },
});

export default HomeScreen;
