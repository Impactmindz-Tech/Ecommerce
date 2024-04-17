import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://65bcb01fb51f9b29e9320d4c.mockapi.io/",
});

export default axiosInstance;
