import React, {FC, ReactElement, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GetLocation from 'react-native-get-location';

import {colors} from './../../../styles';
import {Loading} from './../index';
import {InputLabel} from './label';
import {Error} from './error';

export interface LocationInputProps {
  label: string;
  value?: LatLang;
  setFieldValue?: (location: LatLang) => void;
  error?: string;
}

export const LocationInput: FC<LocationInputProps> = ({
  label,
  error,
  value,
  setFieldValue = () => null,
}): ReactElement => {
  const [getting, setGetting] = useState<boolean>(false);

  const getMyLocation = () => {
    setGetting(true);
    // get current location
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setGetting(false);
        console.log(location);
        setFieldValue({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
        setGetting(false);
      });
  };

  useEffect(() => {
    getMyLocation();
  }, []);

  return (
    <View>
      <InputLabel label={label} error={error} />
      <View style={styles.wrapper}>
        {getting ? (
          <Loading />
        ) : (
          <>
            <Text>Latitude: {value?.latitude}</Text>
            <Text>Longitude: {value?.longitude}</Text>
          </>
        )}
      </View>
      <Error error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 12,
    padding: 12,
    minHeight: 55,
  },
});
