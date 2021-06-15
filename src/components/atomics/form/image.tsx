import React, {FC, ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, View, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {colors} from './../../../styles';
import {InputLabel} from './label';
import {Error} from './error';
import {Avatar} from './../index';

export interface ImageInputProps {
  label: string;
  value?: string;
  setFieldValue?: (text: string) => void;
  error?: string;
}

export const ImageInput: FC<ImageInputProps> = ({
  label,
  error,
  value,
  setFieldValue = () => null,
}): ReactElement => {
  const takePicture = () => {
    const options = {
      width: 512,
      height: 512,
      cropping: true,
      multiple: false,
      useFrontCamera: true,
    };
    if (Platform.OS === 'android') {
      ImagePicker.openCamera(options).then(image => {
        setFieldValue(image.path);
      });
    } else {
      // because Ios simulator can not capture image from front camera
      // So I use pick image from gallery in the ios
      ImagePicker.openPicker(options).then(image => {
        if (image?.sourceURL) {
          setFieldValue(image.sourceURL);
        }
      });
    }
  };

  return (
    <View style={styles.wrapper}>
      <InputLabel label={label} error={error} />
      <TouchableOpacity
        style={{
          ...styles.selectWrapper,
          ...(error ? styles.selectWrapperError : {}),
        }}
        onPress={takePicture}>
        <Avatar picture={value} />
      </TouchableOpacity>
      <Error error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginBottom: 8,
  },
  selectWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: 12,
    minHeight: 55,
  },
  selectWrapperError: {
    borderColor: colors.error,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
