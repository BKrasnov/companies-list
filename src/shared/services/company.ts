import { Company } from "@shared/models/company";

export async function getAllCompanies(): Promise<Company[]> {
  const response = await fetch('/mock/companies.json');
  if (!response.ok) {
    throw new Error('Ошибка при получении списка компаний');
  }
  return response.json();
}