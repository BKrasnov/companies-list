import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { employeeActions } from '@store/employee/slice';
import './styles.css';

export const EmployeeTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCompany = useAppSelector((state: RootState) => state.companies.selectedCompany);
  const selectedEmployees = useAppSelector((state: RootState) => state.employees.selectedEmployees);

  useEffect(() => {
    if (selectedCompany) {
      dispatch(employeeActions.selectedEmployees(selectedCompany));
    }
  }, [selectedCompany]);

  if (!selectedCompany || !selectedEmployees) {
    return <div>Выберите компанию</div>;
  }

  return (
    <div className="employee-table">
      <h2>{selectedCompany.name}</h2>
      <p>Количество сотрудников: {selectedCompany.employeeIds.length}</p>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Позиция</th>
          </tr>
        </thead>
        <tbody>
          {selectedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
