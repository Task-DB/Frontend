import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ReplyFormWrapper = styled.div`
  position: relative;
`;

export const ReplyFormButton = styled.button`
  position: absolute;
  top: 11px;
  right: 10px;
  border: 0;
  color: ${theme.black};
  background-color: ${theme.main};
`;
