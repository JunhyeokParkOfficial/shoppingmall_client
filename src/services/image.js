import { API_URL } from "../constants/urls";
import { axiosInstance } from "./axios/axiosInstance";

export const requestUploadImage = async (image) => {
    const req = new FormData();
    req.append('file',image);

    const response = await axiosInstance.post(API_URL.IMAGE, req);
    console.log(response);

    return response.headers.get('Location');
};
