import db from "../plugins/indexDB";

export const add_token = (token: string) => {
  localStorage.setItem("token", token);
};

export const get_token = () => {
  return localStorage.getItem("token");
};

export const delete_token = () => {
  localStorage.removeItem("token");
};

export const is_auth = () => {
  if (get_token()) {
    return true;
  }
  return false;
};

export const add_employee = async (
  id_branch: number,
  id_employee: number,
  name: string,
  lastName: string
) => {
  try {
    await db.employee.add({ id_branch, id_employee, name, lastName });
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
      await db.employee.delete(Number(emp.id));
    });
  } catch (error) {
    return error;
  }
};
