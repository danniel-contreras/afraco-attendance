import db from "../plugins/indexDB";

export const add_token = async (token: string) => {
  try {
    await db.token.add({ token });
  } catch (error) {
    return error;
  }
};

export const get_token = async () => {
  return await db.token.toArray();
};

export const delete_token = async () => {
  try {
    const tokens = await get_token();

    tokens.forEach(async (tok) => {
      await db.token.delete(Number(tok.id));
    });
  } catch (error) {
    return error;
  }
};

export const add_employee = async (id_branch: number, id_employee: number,name:string,lastName:string) => {
  try {
    await db.employee.add({ id_branch, id_employee,name,lastName });
  } catch (error) {
    return error;
  }
};

export const get_employee = async () => {
  return await db.employee.toArray();
};

export const delete_employee = async () => {
  try {
    const employees = await get_employee();

    employees.forEach(async (emp) => {
      await db.token.delete(Number(emp.id));
    });
  } catch (error) {
    return error;
  }
};
