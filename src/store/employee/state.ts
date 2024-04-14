import { Employee } from "@shared/models/employees";

interface EmployeeState {
  employees: Employee[];
  selectedEmployees?: Employee[]
  isLoading: boolean;
  error?: string;
}

export const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
};
