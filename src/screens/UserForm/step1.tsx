import * as React from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  InputsContainer,
  FormikInput,
  FormikImagePicker,
  FormikLocationInput,
} from '../../components/atomics';
import {useForm, UserFormStep} from '../../hooks/UserForm';

function HomeScreen() {
  const {onSubmit, initialValues, validationSchema} = useForm(UserFormStep.ONE);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({handleSubmit, isSubmitting}) => (
          <InputsContainer style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.scrollWrapper}>
              <FormikInput type="name" name="firstName" label="First Name:" />
              <FormikInput type="name" name="lastName" label="Last Name:" />
              <FormikImagePicker
                name="picture"
                label="Take picture of yourself"
              />
              <FormikLocationInput name="location" label="My Location" />
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
