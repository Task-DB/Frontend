import axios, { AxiosError, AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://192.168.10.103:8092",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (response) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      response.headers = {
        "ACCESS_TOKEN": accessToken,
      };
    }
    return response;
  },

  (error: AxiosError) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error) {
      return error;
    }
  }
);

export default instance;
