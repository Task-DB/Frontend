import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserProvider = styled.div<{ isTop: boolean }>`
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  margin-left: 1rem;
  color: ${(props) => (props.isTop ? "red" : "blue")};
`;
export const UserTitle = styled.h2``;

export const UserTopProvider = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const UserButton = styled.button`
  padding: 0.3rem;
  box-sizing: border-box;
  background-color: ${theme.main};
  border-radius: 8px;
`;

export const UserContent = styled.div`
  padding: 1rem;
`;
