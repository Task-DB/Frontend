import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SelectorWrapper = styled.div`
  display: inline;
  border: 1px solid ${theme.red["500"]};
  color: black;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin-top: 2rem !important;
  margin-left: 2rem;
`;

export const SelectorElement = styled.span<{ isSelect: boolean }>`
  margin-top: 1rem;
  border-right: 1px solid ${theme.black};
  padding: 0.5rem;
  background-color: ${(props) =>
    props.isSelect ? theme.blue["100"] : theme.main};
  color: ${(props) => (props.isSelect ? theme.black : theme.black)};
  transition: all 0.2s;
  &:first-child {
    border: 0;
    border-radius: 8.7px 0 0 8.7px;
    border-right: 1px solid ${theme.black};
  }
  &:last-child {
    border: 0;
    border-radius: 0 8.7px 8.7px 0;
  }
  &:hover {
    background-color: ${theme.blue["100"]};
    color: ${theme.black};
  }
`;
