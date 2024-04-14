import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyService } from '@shared/services/company';

export const fetchedCompanies = createAsyncThunk(
  'product/fetched',
  CompanyService.fetchCompanies
);
