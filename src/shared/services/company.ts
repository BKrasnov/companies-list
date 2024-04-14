import { CompanyMapper } from "@shared/mappers/company";
import { Company } from "@shared/models/company";

export class CompanyService {
  /** Извлечь компании. */
  static async fetchCompanies(): Promise<Company[]> {
    const response = await fetch('/mock/company.json');
    if (!response.ok) {
      throw new Error('Ошибка при получении списка компаний');
    }
    const data = await response.json();
    return data.map((dto: unknown) => CompanyMapper.fromDto(dto));
  }
}