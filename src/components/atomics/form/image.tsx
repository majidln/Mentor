import React, {FC, ReactElement, useMemo} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {colors} from './../../../styles';
import {InputLabel} from './label';
import {Error} from './error';

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
    ImagePicker.openCamera({
      width: 512,
      height: 512,
      cropping: true,
    }).then(image => {
      console.log(image);
      setFieldValue(image.path);
    });
  };

  const renderPreview = useMemo(() => {
    if (value) {
      return (
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: value}}
        />
      );
    }
    return null;
  }, [value]);

  return (
    <View style={styles.wrapper}>
      <InputLabel label={label} error={error} />
      <TouchableOpacity
        style={{
          ...styles.selectWrapper,
          ...(error ? styles.selectWrapperError : {}),
        }}
        onPress={takePicture}>
        {renderPreview}
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
