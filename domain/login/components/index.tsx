import React from "react";
import type { NextPage } from "next";
import {
  FormElement,
  LoginBottom,
  LoginBottomProvider,
  LoginButton,
  LoginButtonProvider,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginMainText,
  LoginTopBar,
} from "./index.style";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { handleLogin } from "../api";
import { LoginRequestType } from "../interface";
import Link from "next/link";

const Login: NextPage = () => {
  const router = useRouter();
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

      <LoginButtonProvider>
        <LoginButton>로그인</LoginButton>
      </LoginButtonProvider>

      <LoginBottomProvider>
        <Link href="/signup" passHref>
          <LoginBottom>회원가입</LoginBottom>
        </Link>
        <Link href="/signup" passHref>
          <LoginBottom>회원가입</LoginBottom>
        </Link>
        <Link href="/signup" passHref>
          <LoginBottom>회원가입</LoginBottom>
        </Link>
      </LoginBottomProvider>
    </LoginForm>
  );
};

export default Login;
