import axios from "axios";
import { API_URL } from "../utils/constants";
import { Auth } from "../types/auth.types";

export const make_login = async (vendorCode: string, password: string) => {
  const { data } = await axios.post<Auth>(API_URL + "/auth/loginEmployee", {
    vendorCode,
    password,
  });

  return data;
};
