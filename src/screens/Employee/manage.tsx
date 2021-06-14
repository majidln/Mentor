import * as React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';

import {employees} from '../../data/employees';
import EmployeeItem from '../../components/screens/Employee/item';
import {useManage} from './../../hooks/Manage';

function ManageScreen() {
  const {selectItem, deSelectItem, selectedEmployee, isSelected} = useManage();
  console.log('selectedEmployee', selectedEmployee);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList<Employee>
        data={employees}
        keyExtractor={item => item.email}
        renderItem={({item}) => (
          <EmployeeItem
            employee={item}
            onSelect={selectItem}
            onDeSelect={deSelectItem}
            isSelected={isSelected(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 12,
  },
  formWrapper: {
    flex: 1,
  },
  scrollWrapper: {
    flex: 1,
    marginBottom: 20,
  },
});

export default ManageScreen;
