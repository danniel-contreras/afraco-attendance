import { defineStore } from "pinia";
import { make_login } from "../services/auth.service";
import { add_token, delete_token } from "../services/local.service";
import db from "../plugins/indexDB";
import { router } from "../router/router";

export const UseAuthStore = defineStore("auth", {
  state: () => ({
    is_auth: false,
    token: undefined as string | undefined,
  }),
  actions: {
    async MakeLogin(vendorCode: string, password: string) {
      const { ok, token } = await make_login(vendorCode, password);
      if (ok) {
        await add_token(token);
        this.token = token;
        this.is_auth = true;
      }
    },
    async SetInfo() {
      const token = await db.token.toArray();
      if (token.length > 0) {
        this.token = token[0].token;
        this.is_auth = true;
      } else {
        this.token = "";
        this.is_auth = false;
      }
    },
    async MakeLoggout() {
      await delete_token();
      this.token = undefined;
      this.is_auth = false;
      router.push("/auth");
    },
  },
});
