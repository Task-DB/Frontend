import React from "react";
import instance from "../../../lib/instance";
import { SignupRequestType } from "../interface";

export const postSignup = async (signupData: SignupRequestType) => {
  try {
    const { data } = await instance.post(`/signup`, signupData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCertificate = async (email: string) => {
  try {
    const { data } = await instance.post(`/join`, email);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleSignup = (email: string, data: SignupRequestType) => {
  const signupData = {
    email: email,
    checkCode: data.checkCode,
    nickname: data.nickname,
    password: data.password,
  };
  postSignup(signupData).then((response) => {
    console.log(response);
  });
};

export const handleCertificate = (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  postCertificate(email).then((response) => {
    console.log(response);
    alert("전송이 완료되었습니다. 이메일을 확인해주세요.");
    setStatus("전송 완료!");
  });
};
