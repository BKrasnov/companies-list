import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmployeeService } from '@shared/services/employee';

export const fetchedEmployees = createAsyncThunk(
  'employee/fetched',
  EmployeeService.fetchEmployees
);
