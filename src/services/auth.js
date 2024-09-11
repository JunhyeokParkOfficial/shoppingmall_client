
import axios from "../services/api"
import { API_URL } from "../constants/urls";

export const requestLogin = async (data) => {
    const response = await axios.post(API_URL.LOGIN, data);
  
    return response.data;
};

export const requestLogout = async () => {
    const response = await axios.delete(API_URL.LOGIN);
  
    return response;
};