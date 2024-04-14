import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyService } from '@shared/services/company';

export const fetchedCompanies = createAsyncThunk(
  'company/fetched',
  CompanyService.fetchCompanies
);
