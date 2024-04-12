import { Company } from "@shared/models/company";

interface CompanyState {
  companies: Company[];
  selectedCompany: Company | null;
}

export const initialState: CompanyState = {
  companies: [],
  selectedCompany: null,
};


