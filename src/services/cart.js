import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const requestAddToCart = async (productId) => {
    const requestBody = {
        "productId": productId
    }
    const response = await axiosInstance.post(API_URL.ADD_TO_CART, requestBody);
    
    return response.data;
};