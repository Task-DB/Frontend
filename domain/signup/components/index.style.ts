import styled from "styled-components";
import { theme } from "../../../styles/theme";
import {
  Form,
  FormElement,
  LoginButton,
  LoginButtonProvider,
  LoginInput,
  LoginLabel,
  MainText,
  TopBar,
} from "../../login/components/index.style";

export const CertificateButton = styled.button`
  background-color: ${theme.black};
  color: ${theme.white};
  position: absolute;
  right: 120px;
  top: 10px;
  padding: 0.3rem;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  transition: 0.3s;
`;

export const CertificateButtonProvider = styled.div`
  position: relative;
`;

export const SignupForm = styled(Form)``;
export const SignupFormElement = styled(FormElement)``;
export const SignupButton = styled(LoginButton)``;
export const SignupInput = styled(LoginInput)``;
export const SignupLabel = styled(LoginLabel)``;
export const SignupMainText = styled(MainText)``;
export const SignupTopBar = styled(TopBar)``;
export const SignupButtonProvider = styled(LoginButtonProvider)``;

export const RedStar = styled.span`
  color: red;
  margin-left: 0.3rem;
`;
