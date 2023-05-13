import { defineStore } from "pinia";
import { make_login } from "../services/auth.service";
import {
  add_employee,
  add_token,
  delete_employee,
  delete_token,
} from "../services/local.service";
import db, { EmployeeDB } from "../plugins/indexDB";
import { router } from "../router/router";
import { useToast } from "vue-toastification";

const toast = useToast();

export const UseAuthStore = defineStore("auth", {
  state: () => ({
    is_auth: false,
    token: undefined as string | undefined,
    employee: {} as EmployeeDB,
  }),
  actions: {
    async MakeLogin(vendorCode: string, password: string) {
      const { ok, token, employee } = await make_login(vendorCode, password);
      if (ok) {
        await add_token(token);
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
        router.push("/");
      } else {
        toast.error("Datos invalidos");
      }
    },
    async SetInfo() {
      const token = await db.token.toArray();
      const employee = await db.employee.toArray();
      if (token.length > 0) {
        this.token = token[0].token;
        this.employee = employee[0];
        this.is_auth = true;
      } else {
        this.token = "";
        this.is_auth = false;
      }
    },
    async MakeLoggout() {
      await delete_token();
      await delete_employee()
      this.token = undefined;
      this.is_auth = false;
      router.push("/auth");
    },
  },
});
