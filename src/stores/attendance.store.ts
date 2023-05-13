import { defineStore } from "pinia";
import { check_info } from "../services/attendande.service";

export const UseAttendanceStore = defineStore("attendance", {
  state: () => ({
    is_authorized: false,
  }),
  actions: {
    async VerifyAuth(user_id: number) {
      const data = await check_info(user_id);
      this.is_authorized = data.ok;
    }
  },
});
