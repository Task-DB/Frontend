import axios, { AxiosError, AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://192.168.10.103:8092",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default instance;
