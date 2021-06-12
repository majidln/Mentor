import React, {FC, ReactElement, useMemo} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {colors} from './../../../styles';
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
      <TouchableOpacity style={styles.selectWrapper} onPress={takePicture}>
        <Text style={styles.title}>{label}</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
});
