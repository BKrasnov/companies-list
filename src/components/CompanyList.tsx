import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { companyActions } from '../store/company/slice';

export const CompanyList: React.FC = () => {
  const companies = useSelector((state: RootState) => state.companies.companies);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="checkbox" onChange={() => dispatch(companyActions.toggleAllCompanies())} /> Выделить всё
      <ul>
        {companies.map((company) => (
          <li key={company.id} style={{ backgroundColor: company.selected ? 'lightblue' : 'white' }}>
            <input
              type="checkbox"
              checked={company.selected}
              onChange={() => dispatch(companyActions.toggleCompanySelection(company.id))}
            />
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
