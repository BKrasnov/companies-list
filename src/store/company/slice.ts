import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, initialState } from './state';

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies = action.payload;
    },
    selectCompany: (state, action: PayloadAction<number>) => {
      state.selectedCompany = state.companies.find(company => company.id === action.payload) || null;
    },
    toggleCompanySelection: (state, action: PayloadAction<number>) => {
      const company = state.companies.find(company => company.id === action.payload);
      if (company) {
        company.selected = !company.selected;
      }
    },
    toggleAllCompanies: (state) => {
      const allSelected = state.companies.every(company => company.selected);
      state.companies.forEach(company => {
        company.selected = !allSelected;
      });
    },
  },
});

export const { reducer: companyReducer, actions: companyActions } = companySlice;

export default companySlice;
