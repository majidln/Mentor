import React, {Component} from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

export interface UserInputProps extends TextInputProps {
  label?: string;
  error?: string | false;
}

export class UserInput extends Component<UserInputProps, {}, any> {
  constructor(props: UserInputProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>In User Input</Text>
      </View>
    );
  }
}
