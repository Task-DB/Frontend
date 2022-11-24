import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { LinePropsType } from "../interface";

export const BoardWrapper = styled.div`
  padding: 1rem 3rem;
  background-color: ${theme.background};
  color: ${theme.white};
  h1 {
    margin: 0;
  }
`;

export const BoardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardStatusWrapper = styled.div`
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

export const BoardStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
export const BoardDate = styled.div`
  margin-left: 1rem;
  span {
    font-weight: bold;
    margin-left: 0.3rem;
  }
`;

export const BoardViews = styled.div`
  margin-left: 1rem;
  span {
    font-weight: bold;
    margin-left: 0.3rem;
  }
`;

export const BoardContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-evenly;
`;

export const BoardLikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardLikes = styled.span`
  font-size: 32px;
  margin: 0.5rem auto;
`;

export const CertificateWrapper = styled.span`
  margin-top: 1rem;
`;

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
