import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {addGroup} from '../store/group/actions';

interface ManageHook {
  selectedEmployees: Array<Employee>;
  isSelected: (employee: Employee) => boolean;
  selectItem: (employee: Employee) => void;
  deSelectItem: (employee: Employee) => void;
  selectedCount: number;
  onSubmit: () => void;
}

export const useManage = (): ManageHook => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedEmployees, setSelectedEmployees] = useState<Array<Employee>>(
    [],
  );

  const selectItem = (employee: Employee) => {
    if (selectedEmployees.length > 4) {
      Toast.show({
        type: 'info',
        text1: "You can't add more then 5 employees to your group",
        position: 'bottom',
      });
      return;
    }
    // check if employee is in the list
    if (!isSelected(employee)) {
      // employee does not exist in the selectedEmployees list so we add that
      setSelectedEmployees([...selectedEmployees, employee]);
    }
  };

  const deSelectItem = (employee: Employee) => {
    const newArray = [...selectedEmployees];
    const index = newArray.findIndex(
      (empItem: Employee) => empItem.id === employee.id,
    );
    if (index !== -1) {
      newArray.splice(index, 1);
      setSelectedEmployees(newArray);
    }
  };

  const isSelected = (employee: Employee) => {
    const index: number = selectedEmployees.findIndex(
      (empItem: Employee) => empItem.id === employee.id,
    );
    return index !== -1;
  };

  const onSubmit = () => {
    if (selectedEmployees.length === 0) {
      Toast.show({
        type: 'info',
        text1: 'Select an employee',
        position: 'bottom',
      });
      return;
    }
    dispatch(addGroup(selectedEmployees));
    navigation.replace('GroupListScreen');
  };

  return {
    selectedEmployees,
    isSelected,
    selectItem,
    deSelectItem,
    selectedCount: selectedEmployees.length,
    onSubmit,
  };
};
