import axios from "axios";
import { API_URL } from "../utils/constants";

interface VerifyAuth {
  ok: boolean;
  msg: string;
}

export const check_info = async (user_id: number) => {
  const { data } = await axios.get<VerifyAuth>(
    API_URL + "/branch/verifyAuth/" + user_id
  );

  return data;
};
