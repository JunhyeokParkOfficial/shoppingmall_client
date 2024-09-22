import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const requestCreateAccount = async (data) => {
    const response = await axiosInstance.post(API_URL.REGISTER, data);
  
    return response.data;
};

export const queryMyInfo = async () => {
    const response = await axiosInstance.get(API_URL.MY_INFO);
    
    return response.data;
}