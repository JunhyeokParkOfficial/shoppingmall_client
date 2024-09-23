import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const getProductsByCategory = async (category, sort, page) => {
    const size = 12;
    const url = `${API_URL.PRODUCTS}?category=${category}&sort=${sort}&page=${page}&size=${size}`;
   
    const response = await axiosInstance.get(url);
    console.log(response);
    
    return response.data;
}


export const getProducts = async (page) => {
    const size = 8;
    
    const response = await axiosInstance.get(`${API_URL.PRODUCTS}?page=${page}&size=${size}`);
    console.log(response);
    
    return response.data;
}