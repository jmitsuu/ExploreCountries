import axios from "axios";
import type { ICountry } from "~/interfaces/restApiCountries";
//api
const API_URL = import.meta.env.VITE_API_URL;
export const getCountries = async (): Promise<ICountry[] | undefined> => {
 try {
  const { data } = await axios.get<ICountry[]>(API_URL);
  return data;
 } catch (error:any) {
  console.log(error.message);
 }
};
