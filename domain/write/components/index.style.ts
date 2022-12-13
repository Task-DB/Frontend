import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../../styles/theme";

export const TitleInput = styled.input`
  display: block;
  width: 70%;
  height: 10px;
  color: ${theme.main};
  background-color: ${theme.background};
  margin: 10px auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${theme.main};
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const CompleteButton = styled.button`
  margin: 8rem auto;
  background-color: ${theme.main};
  transition: 0.3s;
  width: 14rem;
  height: 3rem;
  display: block;
  color: ${theme.background};
  border: 0;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  box-sizing: border-box;
  &:hover {
    background-color: ${theme.lightMain};
  }
`;
