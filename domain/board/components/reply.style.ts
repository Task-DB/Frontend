import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { LinePropsType } from "../interface";

export const BoardComments = styled.div`
  margin: 1rem;
  span {
    margin-left: 0.3rem;
    color: ${theme.gray["300"]};
  }
`;
export const BoardCommentsWrapper = styled.div`
  width: 70%;
  margin-top: 5rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

export const BoardContent = styled.div`
  width: 75%;
`;



export const BoardContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-evenly;
`;

export const BoardLine = styled.hr<LinePropsType>`
  width: ${(props) => props.width}%;
  border: 1px solid #eee;
  background-color: #eee;
  margin: 1rem 0;
`;

export const BoardReply = styled.span`
  font-size: 28px;
`;

export const BoardReplyWrapper = styled.div`
  margin-top: 5rem;
`;
