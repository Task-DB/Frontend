import styled from "styled-components";
import { theme } from "../../../styles/theme";
import {
  UserButton,
  UserContent,
  UserWrapper,
  UserTitle,
  UserTopWrapper,
} from "./index.style";

export const IntroduceWrapper = styled(UserWrapper)``;
export const IntroduceTopWrapper = styled(UserTopWrapper)``;
export const IntroduceUserContent = styled(UserContent)``;
export const IntroduceTitle = styled(UserTitle)``;
export const IntroduceButton = styled(UserButton)`
  margin-left: 1rem;
`;

export const IntroduceInput = styled.textarea`
  resize: none;
  border: 1px solid ${theme.white};
  border-radius: 0.5rem;
  background-color: ${theme.lightBackground};
  color: ${theme.white};
  padding: 0.5rem;
  width: 80%;
  height: 5rem;
`;

export const IntroduceEditWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
