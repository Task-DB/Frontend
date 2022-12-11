import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SelectorWrapper = styled.div`
  display: inline;
  border: 1px solid ${theme.white};
  color: black;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin-top: 2rem !important;
  margin-left: 2rem;
`;

export const SelectorElement = styled.span<{ isSelect: boolean }>`
  cursor: pointer;
  margin-top: 1rem;
  border-right: 1px solid ${theme.main};
  padding: 0.5rem;
  background-color: ${(props) =>
    props.isSelect ? theme.blue["300"] : theme.black};
  color: ${(props) => (props.isSelect ? theme.main : theme.main)};
  transition: all 0.2s;
  &:first-child {
    border: 0;
    border-radius: 8.7px 0 0 8.7px;
    border-right: 1px solid ${theme.main};
  }
  &:last-child {
    border: 0;
    border-radius: 0 8.7px 8.7px 0;
  }
  &:hover {
    background-color: ${theme.blue["300"]};
    color: ${theme.main};
  }
`;
