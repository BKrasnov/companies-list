import { Company } from "@shared/models/company";

export type CompanyWithSelection = Company & {
  selected: boolean;
}

interface CompanyState {
  companies: CompanyWithSelection[];
  selectedCompany?: CompanyWithSelection;
  isLoading: boolean;
  error?: string;
}

export const initialState: CompanyState = {
  companies: [],
  isLoading: false,
};


