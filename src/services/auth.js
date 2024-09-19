import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axiosInstance";

export const requestLogin = async (data) => {
    const response = await axiosInstance.post(API_URL.LOGIN, data);
  
    return response.data;
};

export const requestLogout = async () => {
    const response = await axiosInstance.delete(API_URL.LOGIN);
  
    return response;
};

export const reissueToken = async () => {
    const response = await axiosInstance.post(API_URL.REISSUE);
    
    return response.data;
};