import {useState} from 'react';

interface ManageHook {
  selectedEmployee: Array<Employee>;
  isSelected: (employee: Employee) => boolean;
  selectItem: (employee: Employee) => void;
  deSelectItem: (employee: Employee) => void;
}

export const useManage = (): ManageHook => {
  const [selectedEmployee, setSelectedEmployee] = useState<Array<Employee>>([]);

  const selectItem = (employee: Employee) => {
    // check if employee is in the list
    if (!isSelected(employee)) {
      // employee does not exist in the selectedEmployee list so we add that
      setSelectedEmployee([...selectedEmployee, employee]);
    }
  };

  const deSelectItem = (employee: Employee) => {
    const newArray = [...selectedEmployee];
    const index = newArray.findIndex(
      (empItem: Employee) => empItem.id === employee.id,
    );
    if (index !== -1) {
      newArray.splice(index, 1);
      setSelectedEmployee(newArray)
    }

  };

  const isSelected = (employee: Employee) => {
    const index: number = selectedEmployee.findIndex(
      (empItem: Employee) => empItem.id === employee.id,
    );
    console.log('isSelected', employee.id, index, index !== -1)
    return index !== -1;
  };

  return {
    selectedEmployee,
    isSelected,
    selectItem,
    deSelectItem,
  };
};
