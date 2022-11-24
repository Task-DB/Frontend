import axios, { AxiosError, AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_DEV_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default instance;
