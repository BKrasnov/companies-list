import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { CompanyTable } from '@components/CompanyTable';
import { EmployeeTable } from '@components/EmployeeTable';
import { fetchedCompanies } from '@store/company/dispatchers';
import { fetchedEmployees } from '@store/employee/dispatchers';

import './styles.css';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // При наличии react-router-dom лучше использовать loaders.
    dispatch(fetchedCompanies());
    dispatch(fetchedEmployees());
  }, []);

  return (
    <div className="main-page">
      <CompanyTable />
      <EmployeeTable />
    </div>
  );
};
