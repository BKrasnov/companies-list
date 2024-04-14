import React from 'react';
import { useAppSelector } from '@store';
import { CompanyRow } from './CompanyRow';

import './styles.css';
import { selectCompanies } from '@store/company/selectors';
import { CompanyHeader } from './CompanyHeader';

export const CompanyTable: React.FC = () => {
  const { companies } = useAppSelector(selectCompanies);

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
