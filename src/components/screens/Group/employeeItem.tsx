import React, {FC, ReactElement, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {colors} from '../../../styles';
import {KeyValue} from '../../atomics';

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeItem: FC<EmployeeItemProps> = ({employee}): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <Text>{employee.first_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    borderColor: colors.inputBorder,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  actionWrapper: {
    alignItems: 'flex-end',
  },
  action: {
    color: 'blue',
    fontSize: 18,
    padding: 8,
  },
});

export default EmployeeItem;
