import axios from "axios";
import { API_URL } from "../utils/constants";
import {
  AddAttendance,
  AddAttendanceResponse,
  AttendanceVerify,
  CloseAttendance,
  VerifyAuth,
} from "../types/attendance.types";

export const check_info = async (user_id: number) => {
  const { data } = await axios.get<VerifyAuth>(
    API_URL + "/branch/verifyAuth/" + user_id
  );
  return data;
};

export const add_attendance = async (data_send: AddAttendance) => {
  const { data } = await axios.post<AddAttendanceResponse>(
    API_URL + "/attendanceControl",
    data_send
  );
  return data;
};

export const close_attendance = async (
  data_send: CloseAttendance,
  id: number
) => {
  const { data } = await axios.put<{ ok: boolean }>(
    API_URL + "/attendanceControl/" + id,
    data_send
  );
  return data;
};

export const verify_attendance = async (id: number, day: string) => {
  const { data } = await axios.get<AttendanceVerify>(
    API_URL + "/attendanceControl/chechkRegister/" + id + "?day=" + day
  );
  return data;
};
