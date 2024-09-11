import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = "Bearer " + token;

    return config;
});

export default axios;