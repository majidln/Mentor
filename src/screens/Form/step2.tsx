import * as React from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {InputsContainer, FormikInput} from '../../components/atomics';
import {useForm, UserFormStep} from './../../hooks/UserForm';

function HomeScreen() {
  const {onSubmit, initialValues, validationSchema} = useForm(UserFormStep.TWO);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({handleSubmit, isSubmitting}) => (
          <InputsContainer style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.scrollWrapper}>
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
