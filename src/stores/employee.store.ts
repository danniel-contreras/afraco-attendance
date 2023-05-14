import { defineStore } from "pinia";
import { get_employee_by_id } from "../services/employee.service";
import { Employee } from "../types/user.types";

export const UseEmployeeStore = defineStore("employee", {
  state: () => ({
    employee_info: {} as Employee,
  }),
  actions: {
    async GetEmployee(id: number) {
      const { ok, employee } = await get_employee_by_id(id);

      if (ok) {
        this.employee_info = employee;
      }
    },
  },
});
