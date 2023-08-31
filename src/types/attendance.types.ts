export interface VerifyAuth {
  ok: boolean;
  msg: string;
}

export interface AddAttendance {
  entryTime: string;
  employeeId: number;
  day: string;
}

export interface AttendanceVerify {
  register?: Attendance[];
  ok: boolean;
  msg?: string;
}

export interface Attendance {
  id: number;
  entryTime: string;
  entryState: boolean;
  exitTime: string;
  exitState: boolean;
  date: string;
  state: boolean;
  employeeId: number;
}

export interface AddAttendanceResponse {
  ok: boolean;
  msg: string;
  attendanceControl: {
    entryState: boolean;
    entryTime: string;
    employee: number;
    date: string;
    id: number;
    exitTime: string;
    exitState: boolean;
    state: boolean;
  };
}

export interface CloseAttendance {
  exitTime: string;
  employeeId: number;
}

export interface IP {
  ip: string
}
