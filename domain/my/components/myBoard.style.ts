import styled from "styled-components";
import {
  UserButton,
  UserContent,
  UserWrapper,
  UserTitle,
  UserTopWrapper,
} from "./index.style";

export const InfoWrapper = styled(UserWrapper)``;
export const InfoTopWrapper = styled(UserTopWrapper)``;
export const InfoUserContent = styled(UserContent)`
  div {
    margin-bottom: 5px;
  }
`;
export const InfoTitle = styled(UserTitle)``;
export const InfoButton = styled(UserButton)``;
export const MyQuestionWrapper = styled.div`
  &:hover {
    text-decoration: underline;
  }
`;
