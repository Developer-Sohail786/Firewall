import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "x-client-id": "frontend", // REQUIRED by WAF
  },
});

export default axiosInstance;
