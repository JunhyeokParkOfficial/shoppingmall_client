import { PAGE_URL } from "../constants/urls";
import { reissueToken, requestLogout } from "./auth";
import { axiosInstance } from "./axiosInstance";

export const setToken = (config) => {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = `Bearer ${token}`;

    return config;
}

export const handleTokenError = async (error) => {
    const { config, response } = error;

    if (response.data.code === "A003"){
        await reissueToken()
            .then((data)=>{
                localStorage.setItem("access_token", data.accessToken);
            })

        const accessToken = localStorage.getItem("access_token");
        config.headers.Authorization = `Bearer ${accessToken}`;
        
        return axiosInstance(config);
    } else if(response.data.code === "A002"){
        localStorage.clear();
        window.location.href = PAGE_URL.HOME;
    }

    return Promise.reject(error);
}