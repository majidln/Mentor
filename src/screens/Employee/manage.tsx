import * as React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Button} from 'react-native';

import {employees} from '../../data/employees';
import EmployeeItem from '../../components/screens/Employee/item';
import {useManage} from './../../hooks/Manage';

function ManageScreen() {
  const {selectItem, deSelectItem, isSelected, selectedCount} = useManage();

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList<Employee>
        style={styles.list}
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
      {selectedCount > 0 && (
        <Button
          title={'Continue with ' + selectedCount + ' Colleagues'}
          onPress={() => null}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 12,
  },
  list: {
    flex: 1,
  },
});

export default ManageScreen;
