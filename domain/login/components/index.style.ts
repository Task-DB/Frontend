import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Form = styled.form`
  width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginForm = styled(Form)`
  width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormElement = styled.div`
  position: relative;
`;

export const LoginInput = styled.input.attrs({
  autoComplete: "on",
})`
  display: block;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.main};
  margin: 2rem auto;
`;

export const LoginLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.black};
  position: absolute;
  top: -15px;
  left: 120px;
  display: block;
  background-color: blue;
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button.attrs({
  type: "submit",
})`
  background-color: ${theme.main};
  color: ${theme.black};
  border: 0;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  margin-bottom: 3rem;
  transition: 0.3s;
  &:hover {
    background-color: ${theme.lightMain};
  }
`;

export const LoginBottom = styled.span`
  display: block;
  color: ${theme.main};
  font-size: 0.7rem;
  padding: 0 1rem;
  margin-bottom: 3rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const LoginBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TopBar = styled.hr`
  display: block;
  width: 10rem;
  height: 0.2rem;
  background-color: ${theme.main};
  margin: 3rem auto;
  border: 0;
`;
export const LoginTopBar = styled(TopBar)``;

export const MainText = styled.span`
  text-align: center;
  display: block;
  margin-top: 3rem;
  color: ${theme.main};
  transition: 0.3s;
  font-size: 2rem;
  &:hover {
    transition: 0.3s;
    text-decoration: underline;
  }
`;

export const LoginMainText = styled(MainText)``;
