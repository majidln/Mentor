import {useState} from 'react';

interface ManageHook {
  selectedEmployees: Array<Employee>;
  isSelected: (employee: Employee) => boolean;
  selectItem: (employee: Employee) => void;
  deSelectItem: (employee: Employee) => void;
  selectedCount: number;
}

export const useManage = (): ManageHook => {
  const [selectedEmployees, setSelectedEmployees] = useState<Array<Employee>>([]);

  const selectItem = (employee: Employee) => {
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
