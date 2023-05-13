import { defineStore } from "pinia";
import { DateTime, get_current_time } from "../services/date-time.service";

export const UseUserStore = defineStore("user", {
  state: () => ({
    time: "" as string,
    date: "" as string,
    datetime: {} as DateTime,
  }),
  actions: {
    async GetDateTime() {
      const data = await get_current_time();
      this.datetime = data;
      this.time = new Date(data.datetime).toLocaleTimeString();
      this.date = new Date(data.datetime).toLocaleDateString();
    },
  },
});
