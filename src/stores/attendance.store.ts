import { defineStore } from "pinia";
import {
  check_info,
  add_attendance,
  verify_attendance,
  close_attendance,
} from "../services/attendande.service";
import {
  AddAttendance,
  Attendance,
  CloseAttendance,
} from "../types/attendance.types";
import { useToast } from "vue-toastification";

const toast = useToast();

export const UseAttendanceStore = defineStore("attendance", {
  state: () => ({
    is_authorized: false,
    attendance: undefined as Attendance | undefined,
  }),
  actions: {
    async VerifyAuth(user_id: number) {
      const data = await check_info(user_id);
      this.is_authorized = data.ok;
    },
    async AddNewAttendance(values: AddAttendance) {
      const { ok } = await add_attendance(values);
      if (ok) {
        await this.VerifyAttendance(values.employeeId, values.day);
        toast.success("Se registro la entrada");
      } else {
        toast.error("Error al registrar entrada");
      }
    },
    async ExitAttendance(values: CloseAttendance, id: number, day: string) {
      const { ok } = await close_attendance(values, id);
      if (ok) {
        await this.VerifyAttendance(values.employeeId, day);
        toast.success("Se registro la salidas");
      } else {
        toast.error("Error al registrar salida");
      }
    },
    async VerifyAttendance(id: number, day: string) {
      const { register, ok } = await verify_attendance(id, day);
      if (ok) {
        if (register && register.length > 0) {
          this.attendance = register[0];
        }
      } else {
        this.attendance = undefined;
      }
    },
  },
});
