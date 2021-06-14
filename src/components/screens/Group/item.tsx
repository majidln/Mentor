import React, {FC, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../../styles';
import EmployeeItem from './../Employee/item';

interface EmployeeItemProps {
  group: Array<Employee>;
}

const GroupItem: FC<EmployeeItemProps> = ({group}): ReactElement => {
  return (
    <View style={styles.wrapper}>
      {group.map((employee, index) => (
        <EmployeeItem key={index} employee={employee} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderRadius: 12,
    borderWidth: 2,
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

export default GroupItem;
