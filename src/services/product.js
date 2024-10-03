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

export const getMyProducts = async () => {
    const response = await axiosInstance.get(API_URL.MY_PRODUCTS);

    return response.data;
}

export const queryProductDetail = async (id) => {
    const response = await axiosInstance.get(API_URL.PRODUCT_DETAIL(id));
    console.log(response.data);

    return response.data;
}


export const requestRegisterProduct = async (name, price, detail, category, imageUrl) => {
    const priceCheck = (price) => {
        const check = /^[1-9][0-9]*$/;
        if(check.test(price)) return true;
        else return false;
    }

    if(!name||!detail||!category||!imageUrl||!priceCheck(price)){
        console.log(!name+" "+!detail+" "+!category+" "+!imageUrl);
        alert("상품 정보를 정확하게 입력하세요");
        return false;
    }

    const data = {
        name: name,
        price: price,
        detail: detail,
        category: category,
        imageUrl: imageUrl
    };

    const response = await axiosInstance.post(API_URL.PRODUCT_REG, data);

    console.log(response);

    return true;
};