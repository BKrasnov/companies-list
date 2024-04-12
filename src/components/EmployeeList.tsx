import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const EmployeeList: React.FC = () => {
  const selectedCompany = useSelector((state: RootState) => state.companies.selectedCompany);

  if (!selectedCompany) {
    return <div>Выберите компанию</div>;
  }

  return (
    <div>
      <h2>{selectedCompany.name}</h2>
      <p>Количество сотрудников: {selectedCompany.employees}</p>
      <p>Адрес: {selectedCompany.address}</p>
    </div>
  );
};
