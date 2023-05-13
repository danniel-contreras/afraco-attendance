export interface Auth {
  ok: boolean;
  msg: string;
  employee: Employee;
  idBranch: number;
  distance: number;
  token: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  whatsApp: string;
  state: false;
  remaining: number;
  remainingIva: number;
  discount: false;
  type: string;
  back: number;
  next: number;
  distance: number;
  mac: string;
  nameAddress: string;
  order: true;
  commission: number;
}

export interface Employee {
  id: number;
  names: string;
  lastNames: string;
  address: string;
  phone: string;
  age: number;
  dateOfHire: string;
  salary: number;
  dailyCost: number;
  overtime: number;
  vendorCode: string;
  password: string;
  passwordState: boolean;
  state: boolean;
  branch: Branch;
  job: {
    id: number;
    type: string;
    state: boolean;
  };
  branchId: number;
  jobId: number;
}
