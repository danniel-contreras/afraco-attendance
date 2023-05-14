import axios from "axios";
import { API_URL } from "../utils/constants";
import { Employee } from "../types/user.types";

export const get_employee_by_id = async (id: number) => {
  const { data } = await axios.get<{ ok: boolean; employee: Employee }>(
    API_URL + "/employee/" + id
  );

  return data;
};
