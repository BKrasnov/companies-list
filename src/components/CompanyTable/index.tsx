import React from 'react';
import { RootState, useAppSelector } from '@store';
import { CompanyRow } from './CompanyRow';

import './styles.css';
import { CompanyHeader } from './CompanyHeader';

export const CompanyTable: React.FC = () => {
  const companies = useAppSelector((state: RootState) => state.companies.companies);

  return (
    <table className="company-table">
      <CompanyHeader />
      <tbody>
        {companies.map((company) => (
          <CompanyRow key={company.id} company={company} />
        ))}
      </tbody>
    </table>
  );
};
