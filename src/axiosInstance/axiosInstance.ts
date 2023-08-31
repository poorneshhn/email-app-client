import { API } from "@/component/contants/urlConstants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default axiosInstance;
