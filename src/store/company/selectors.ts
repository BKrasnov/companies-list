import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store"

export const selectCompanies = createSelector(
  (state: RootState) => state.companies.companies,
  companies => companies
);

export const selectCompany = createSelector(
  (state: RootState) => state.companies.selectedCompany,
  companies => companies
);