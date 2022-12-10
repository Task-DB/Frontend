import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const BoardCommentsContent = styled.div`
  margin: .5rem;
  span {
    margin-left: 0.3rem;
    color: ${theme.gray["300"]};
  }
`;

export const BoardCommentsDetail = styled.div`
  display: flex;
  align-items: center;
  
`;

export const BoardCommentsWrapper = styled.div`
  width: 70%;
  margin: 5rem auto 1rem auto;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;
