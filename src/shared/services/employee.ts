import { EmployeeMapper } from "@shared/mappers/employee";
import { Employee } from "@shared/models/employees";

export class EmployeeService {

  /** Извлечь сотрудников. */
  static async fetchEmployees(): Promise<Employee[]> {
    const response = await fetch('/mock/employees.json');
    if (!response.ok) {
      throw new Error('Ошибка при получении списка сотрудников');
    }
    const data = await response.json();
    return data.map((dto: unknown) => EmployeeMapper.fromDto(dto));
  }
}