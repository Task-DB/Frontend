import React from "react";
import type { NextPage } from "next";
import {
  FormElement,
  LoginBottom,
  LoginBottomWrapper,
  LoginButton,
  LoginButtonWrapper,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginMainText,
  LoginTopBar,
} from "./index.style";
import { useForm } from "react-hook-form";
import { handleLogin } from "../api";
import { LoginRequestType } from "../interface";
import Link from "next/link";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<LoginRequestType>();
  return (
    <LoginForm
      onSubmit={handleSubmit((data) => {
        handleLogin(data);
      })}
    >
      <Link href="/">
        <LoginMainText>로그인</LoginMainText>
      </Link>
      <LoginTopBar />

      <FormElement>
        <LoginLabel htmlFor="username">Email</LoginLabel>
        <LoginInput
          type="email"
          placeholder="이메일을 입력해주세요."
          id="username"
          {...register("email")}
        />
      </FormElement>

      <FormElement>
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          id="password"
          {...register("password")}
        />
      </FormElement>

      <LoginButtonWrapper>
        <LoginButton>로그인</LoginButton>
      </LoginButtonWrapper>

      <LoginBottomWrapper>
        <Link href="/signup" passHref>
          <LoginBottom>회원가입</LoginBottom>
        </Link>
        <Link href="/signup" passHref>
          <LoginBottom>비밀번호 찾기</LoginBottom>
        </Link>
        <Link href="/signup" passHref>
          <LoginBottom>아이디 찾기</LoginBottom>
        </Link>
      </LoginBottomWrapper>
    </LoginForm>
  );
};

export default Login;
