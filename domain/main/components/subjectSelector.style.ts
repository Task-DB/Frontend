import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SelectorWrapper = styled.div`
  display: inline;
  border: 1px solid ${theme.white};
  border-radius: 10px;
  padding: 0.5rem 0;
`;

export const SelectorElement = styled.span`
  margin-top: 1rem;
  border-right: 1px solid ${theme.white};
  padding: 0.5rem;
  &:last-child {
    border: 0;
  }
`;
