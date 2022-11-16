import instance from "../../../lib/instance";
import { LoginRequestType } from "../interface";

export const postLogin = async (loginData: LoginRequestType) => {
  try {
    const { data } = await instance.post(`/login`, loginData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleLogin = (data: LoginRequestType) => {
  postLogin(data).then((response) => {
    console.log(response);
  });
};
