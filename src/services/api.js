import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = "Bearer " + token;
    config.withCredentials = true;

    return config;
});

export default axios;