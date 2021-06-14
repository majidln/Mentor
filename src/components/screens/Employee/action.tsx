import React, {FC, ReactElement, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import { colors } from '../../../styles';
import {KeyValue} from './../../atomics';
import Item from './item';

interface EmployeeItemProps {
  employee: Employee;
  isSelected: boolean;
  onSelect?: (employee: Employee) => void;
  onDeSelect?: (employee: Employee) => void;
}

const EmployeeItem: FC<EmployeeItemProps> = ({
  employee,
  isSelected = false,
  onSelect = () => null,
  onDeSelect = () => null,
}): ReactElement => {
  const renderButton = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() =>
          isSelected ? onDeSelect(employee) : onSelect(employee)
        }>
        <Text style={styles.action}>{isSelected ? 'Unselect' : 'Select'}</Text>
      </TouchableOpacity>
    );
  }, [isSelected, onDeSelect, employee, onSelect]);

  return (
    <Item employee={employee}>
      <View style={styles.actionWrapper}>{renderButton}</View>
    </Item>
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
