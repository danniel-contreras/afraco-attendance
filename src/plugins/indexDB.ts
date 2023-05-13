import Dexie from "dexie";

interface Tokens {
  id?: number;
  token: string;
}

interface Employee {
  id?: number;
  id_employee: number;
  id_branch: number;
}

class MyDatabase extends Dexie {
  token: Dexie.Table<Tokens, number>;
  employee: Dexie.Table<Employee, number>;

  constructor() {
    super("attendance");
    this.version(2).stores({
      tokens: "++id,token",
      employees: "++id,id_employee,id_branch",
    });
    this.token = this.table("tokens");
    this.employee = this.table("employees");
  }
}

const db = new MyDatabase();

export default db;
