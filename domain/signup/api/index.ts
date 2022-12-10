import { useRouter } from "next/router";
import React from "react";
import instance from "../../../lib/instance";
import { CertificateRequestType, SignupRequestType } from "../interface";

export const postSignup = async (signupData: SignupRequestType) => {
  try {
    const { data } = await instance.post(`/user/join`, signupData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCertificate = async (
  certificateData: CertificateRequestType
) => {
  try {
    const { data } = await instance.post(`/email/join`, certificateData);
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
  postSignup(signupData)
    .then((_) => {
      alert("가입에 성공하였습니다.");
      location.href = "/login";
    })
    .catch((_) => {
      alert("가입에 실패하였습니다.");
    });
};

export const handleCertificate = (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  const certificateData = { email: email };
  postCertificate(certificateData)
    .then((_) => {
      alert("전송이 완료되었습니다. 이메일을 확인해주세요.");
      setStatus("전송 완료!");
    })
    .catch((_) => {
      setStatus("전송 실패");
    });
};
