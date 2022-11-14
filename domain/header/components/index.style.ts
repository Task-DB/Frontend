import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderContainer = styled.div`
  background-color: ${theme.gray["700"]};
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeftContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  spellCheck: false,
  placeholder: "Search Task...",
})`
  margin-left: 1.5rem;
  border-radius: 0.8rem;
  padding: 1rem;
  box-sizing: border-box;
  height: 1rem;
  border: 0;
  color: white;
  background-color: black;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
  position: relative;
`;

export const SearchButton = styled.button`
  background: none;
  border: 0;
  position: absolute;
  left: 350px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  color: ${theme.white};
  width: 10rem;
  margin: 0;
  justify-content: space-around;
`;

export const HeaderLi = styled.li`
  list-style: none;
`;

export const HeaderLogin = styled.div`
  list-style: none;
  color: ${theme.white};
`;
