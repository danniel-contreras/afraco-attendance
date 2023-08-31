import axios, { AxiosError } from "axios";
import { API_URL } from "../utils/constants";
import { Auth } from "../types/auth.types";

export const make_login = async (vendorCode: string, password: string) => {
  console.log(vendorCode, password);

  try {
    const { data } = await axios.post<Auth>(API_URL + "/auth/loginEmployee", {
      vendorCode,
      password,
    });

    console.log(data);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;

      if (axiosError.response) {
        // La solicitud se completó con un código de estado no exitoso
        console.error('Código de estado HTTP:', axiosError.response.status);
        console.error('Mensaje de error del servidor:', axiosError.response.data);
      } else if (axiosError.request) {
        // La solicitud se realizó, pero no se recibió una respuesta
        console.error('No se recibió respuesta del servidor:', axiosError.request);
      } else {
        // Ocurrió un error antes de enviar la solicitud
        console.error('Error durante la solicitud:', axiosError.message);
      }

      // Puedes arrojar el error nuevamente o manejarlo de alguna otra manera
      throw axiosError;
    } else {
      // Maneja otros errores que no sean de Axios
      console.error('Error inesperado:', error);
      throw error;
    }
  }
};
