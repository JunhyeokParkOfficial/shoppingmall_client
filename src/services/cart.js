import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const requestAddToCart = async (productId) => {
    const requestBody = {
        "productId": productId
    }
    const response = await axiosInstance.post(API_URL.ADD_TO_CART, requestBody);
    
    return response.data;
};

export const queryCartItems = async () => {
    const response = await axiosInstance.get(API_URL.CART_ITEMS);
    console.log(response);
    return response.data;
};