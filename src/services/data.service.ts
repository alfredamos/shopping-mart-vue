import type { AxiosResponse } from "axios";
import Axios from "../interceptors/axios.interceptor";

class DataService {
  async getAll<T>(url: string) {
    const {data} = await Axios.get<T>(url) as AxiosResponse<T>;
    
    return data
  }
}

export const dataService = new DataService();
