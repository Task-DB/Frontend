import instance from "../../../lib/instance";
import { LoginRequestType } from "../interface";



export const postLogin = async (loginData: LoginRequestType) => {
  try {
    const { data } = await instance.post(`/auth/login`, loginData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleLogin = (data: LoginRequestType) => {
  postLogin(data)
    .then((response) => {
      localStorage.setItem("accessToken", response.accessToken.accessToken);
      location.href = "/";
      console.log("로그인성공");
    })
    .catch((error) => {
      alert(error.response.data.errorMessage);
    });
};
