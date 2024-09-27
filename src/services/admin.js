import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const requestUploadImage = async (image) => {
    const req = new FormData();
    req.append('file',image);

    const response = await axiosInstance.post(API_URL.IMAGE, req);
    console.log(response);

    return response.headers.get('Location');
};

export const requestRegisterProduct = async (name, price, detail, category, stock, imageUrl) => {
    const priceCheck = (price) => {
        const check = /^[1-9][0-9]*$/;
        if(check.test(price)) return true;
        else return false;
    }
    const stockCheck = (stock) => {
        const check = /^[1-9][0-9]*$/;
        if(check.test(stock)) return true;
        else return false;
    }

    if(!name||!detail||!category||!imageUrl||!stockCheck(stock)||!priceCheck(price)){
        alert("상품 정보를 정확하게 입력하세요");
        return false;
    }

    const data = {
        name: name,
        price: price,
        detail: detail,
        category: category,
        stock: stock,
        imageUrl: imageUrl
    };

    const response = await axiosInstance.post(API_URL.PRODUCT_REG, data);

    console.log(response);

    return true;
};