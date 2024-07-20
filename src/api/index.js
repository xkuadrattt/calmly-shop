import axios from "axios";

const axiosInit = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 18000,
  headers: {
    Authorization: "Bearer",
    "Content-Type": "application/json",
  },
});

export default axiosInit;
