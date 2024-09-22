import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const getProducts = async (category, sort, page) => {
    let url = "";
    const size = 12;
    if(sort == null && page == null){
        url = API_URL.PRODUCTS_FIRST(category, size);
    } else {
        url = API_URL.PRODUCTS(category, sort, page, size);
    }
    const response = await axiosInstance.get(url);
    console.log(response);
    
    return response.data;
}