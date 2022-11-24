import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const BoardComments = styled.div`
  margin: 1rem;
  span {
    margin-left: 0.3rem;
    color: ${theme.gray["300"]};
  }
`;
export const BoardCommentsWrapper = styled.div`
  width: 70%;
  margin: 5rem auto;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;
