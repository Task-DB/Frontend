import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ReplyFormWrapper = styled.div<{ width: string;  }>`
  position: relative;
  width: ${(props) => props.width}%;
  margin-left: auto;
  margin-right: auto;
`;

export const ReplyFormButton = styled.button`
  position: absolute;
  top: 11px;
  right: 10px;
  border: 0;
  color: ${theme.black};
  background-color: ${theme.main};
  border-radius: 0.3rem;
`;
