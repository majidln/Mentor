import * as React from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {InputsContainer, FormikInput} from '../../components/atomics';
import {useForm} from './../../hooks/Step2';

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
              <FormikInput type="name" name="department" label="Department:" />
              <FormikInput type="name" name="jobTitle" label="Job Title:" />
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
    marginBottom: 20,
  },
});

export default HomeScreen;
