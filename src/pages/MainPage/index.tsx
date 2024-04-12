import React, { useEffect } from 'react';
import { store } from '../../store';
import { companyActions } from '../../store/company/slice';
import { CompanyList } from '../../components/CompanyList';
import { EmployeeList } from '../../components/EmployeeList';

export const MainPage: React.FC = () => {
  useEffect(() => {
    const companies = [
      { id: 1, name: 'Company A', employees: 100, address: 'Address A', selected: false },
      { id: 2, name: 'Company B', employees: 200, address: 'Address B', selected: false },
    ];
    store.dispatch(companyActions.setCompanies(companies));
  }, []);

  return (
    <div>
      <CompanyList />
      <EmployeeList />
    </div>
  );
};
