export interface Company {
  id: number;
  name: string;
  employees: number;
  address: string;
  selected: boolean;
}

interface CompanyState {
  companies: Company[];
  selectedCompany: Company | null;
}

export const initialState: CompanyState = {
  companies: [],
  selectedCompany: null,
};