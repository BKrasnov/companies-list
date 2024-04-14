import React from 'react';
import { companyActions } from '@store/company/slice';
import { CompanyWithSelection } from '@store/company/state';
import { useAppDispatch } from '@store';

type CompanyRowProps = {
  company: CompanyWithSelection;
};

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className={`company-row ${company.selected ? 'selected' : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={company.selected}
          onChange={() => dispatch(companyActions.toggleCompanySelection(company.id))}
        />
      </td>
      <td>{company.name}</td>
      <td>{company.employeeIds.length}</td>
      <td>{company.address}</td>
    </tr>
  );
};
