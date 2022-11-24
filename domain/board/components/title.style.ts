import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const BoardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardTitle = styled.h1`
  font-weight: 300;
`;

export const BoardNo = styled.h1`
  color: ${theme.gray["300"]};
  margin-left: 1rem !important;
  font-weight: 300;
`;
