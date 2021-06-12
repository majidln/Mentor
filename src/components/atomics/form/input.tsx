import React, {Component} from 'react';
import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';

import {colors} from './../../../styles';

export interface UserInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export class UserInput extends Component<UserInputProps, {}, any> {
  input: any;
  constructor(props: UserInputProps) {
    super(props);

    this.input;
  }

  focus = () => {
    if (this.input) {
      this.input?.focus();
    }
  };

  render() {
    const {label, error, ...rest} = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={{...styles.label, ...(error ? styles.labelError : {})}}>
          {label}
        </Text>
        <TextInput
          ref={input => {
            this.input = input;
          }}
          style={{...styles.input, ...(error ? styles.errorInput : {})}}
          {...rest}
        />
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 3,
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    paddingVertical: 4,
  },
  labelError: {
    color: colors.error,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 12,
    padding: 12,
  },
  errorInput: {
    borderColor: colors.error,
  },
  error: {
    fontSize: 16,
    paddingVertical: 4,
    color: colors.error,
  },
});
