import { useAppDispatch, useAppSelector } from '@store';
import { selectCompanies } from '@store/company/selectors';
import React, { useEffect, useState } from 'react';
import { companyActions } from '@store/company/slice';

export const CompanyHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { companies } = useAppSelector(selectCompanies);
  const [allSelected, setAllSelected] = useState(false);

  const handleChangeToggleAll = () => {
    dispatch(companyActions.toggleAllCompanies());
  };

  useEffect(() => {
    if (companies.length === 0) {
      setAllSelected(false);
    } else {
      const allCompaniesSelected = companies.every((company) => company.selected);
      setAllSelected(allCompaniesSelected);
    }
  }, [companies]);

  return (
    <tr>
      <th>
        <input type="checkbox" checked={allSelected} onChange={handleChangeToggleAll} />
      </th>
      <th>Название компании</th>
      <th>Кол-во сотрудников</th>
      <th>Адрес</th>
    </tr>
  );
};
