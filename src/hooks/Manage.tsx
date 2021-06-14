import {useState} from 'react';
import Toast from 'react-native-toast-message';

interface ManageHook {
  selectedEmployees: Array<Employee>;
  isSelected: (employee: Employee) => boolean;
  selectItem: (employee: Employee) => void;
  deSelectItem: (employee: Employee) => void;
  selectedCount: number;
}

export const useManage = (): ManageHook => {
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

  return {
    selectedEmployees,
    isSelected,
    selectItem,
    deSelectItem,
    selectedCount: selectedEmployees.length,
  };
};
