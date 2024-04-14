import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store"

export const selectCompanies = createSelector(
  (state: RootState) => state.companies,
  companies => companies
);