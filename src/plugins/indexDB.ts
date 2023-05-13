import Dexie from "dexie";

interface Tokens {
  id?: number;
  token: string;
}

export interface EmployeeDB {
  id?: number;
  id_employee: number;
  id_branch: number;
  name:string
  lastName:string
}

class MyDatabase extends Dexie {
  token: Dexie.Table<Tokens, number>;
  employee: Dexie.Table<EmployeeDB, number>;

  constructor() {
    super("attendance");
    this.version(2).stores({
      tokens: "++id,token",
      employees: "++id,id_employee,id_branch,name,lastName",
    });
    this.token = this.table("tokens");
    this.employee = this.table("employees");
  }
}

const db = new MyDatabase();

export default db;
