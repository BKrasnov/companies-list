import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { CompanyTable } from '../../components/CompanyTable';
import { EmployeeList } from '../../components/EmployeeList';
import { fetchedCompanies } from '@store/company/dispatchers';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchedCompanies());
  }, []);

  return (
    <div>
      <CompanyTable />
      <EmployeeList />
    </div>
  );
};
