import { defineStore } from "pinia";
import { make_login } from "../services/auth.service";
import {
  add_employee,
  add_token,
  delete_employee,
  delete_token,
  get_token,
} from "../services/local.service";
import db, { EmployeeDB } from "../plugins/indexDB";
import { useToast } from "vue-toastification";

const toast = useToast();

export const UseAuthStore = defineStore("auth", {
  state: () => ({
    is_auth: false,
    token: get_token() as string | undefined,
    employee: {} as EmployeeDB,
  }),
  actions: {
    async MakeLogin(vendorCode: string, password: string) {
      const { ok, token, employee } = await make_login(vendorCode, password);
      if (ok) {
        add_token(token);

        toast.success("Bienvenido");
        await add_employee(
          employee.branch.id,
          employee.id,
          employee.names,
          employee.lastNames
        );
        this.token = token;
        this.is_auth = true;
        this.employee = {
          id_branch: employee.branch.id,
          id_employee: employee.id,
          name: employee.names,
          lastName: employee.lastNames,
        };
        window.location.href = "/";
      } else {
        toast.error("Datos invalidos");
      }
    },
    async SetInfo() {
      // const token = await db.token.toArray();
      const employee = await db.employee.toArray();
      const token = localStorage.getItem("token");
      if (token) {
        this.token = token;
        this.employee = employee[0];
        this.is_auth = true;
      } else {
        this.token = "";
        this.is_auth = false;
      }
    },
    async MakeLoggout() {
      delete_token();
      await delete_employee();
      this.token = undefined;
      this.is_auth = false;
      window.location.href = "/login";
    },
  },
});
