import axios from "../services/api";
import { API_URL } from "../constants/urls";

export const requestCreateAccount = async (data) => {
    const response = await axios.post(API_URL.REGISTER, data);
  
    return response.data;
};

export const queryMyInfo = async () => {
    const response = await axios.get(API_URL.MY_INFO);
    return response.data;
}