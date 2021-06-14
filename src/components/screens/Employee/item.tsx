import React, {FC, ReactElement, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import { colors } from '../../../styles';
import {KeyValue} from './../../atomics';

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeItem: FC<EmployeeItemProps> = ({
  employee,
  children,
}): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>
          {employee.first_name + ' ' + employee.last_name}
        </Text>
        <Text>{employee.gender}</Text>
      </View>
      <KeyValue
        label="From"
        value={`${employee.country + ' ' + employee.city}`}
      />
      <KeyValue label="Email" value={employee.email} />
      <KeyValue label="Department" value={employee.department} />
      <KeyValue label="Job Title" value={employee.job_title} />
      {children}
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
