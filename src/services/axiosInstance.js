import axios from "axios";
import { handleTokenError, setToken } from "./interceptors";

export const axiosInstance = axios.create({
    withCredentials: true
})

axiosInstance.interceptors.request.use(setToken);
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => handleTokenError(error)
)