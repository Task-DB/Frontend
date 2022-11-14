import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const BoardProvider = styled.div`
  padding: 1rem 3rem;
  background-color: ${theme.background};
  color: ${theme.white};
  h1 {
    margin: 0;
  }
`;

export const BoardTitleProvider = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardStatusProvider = styled.div`
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
  margin-left: 0.5rem;
  span {
    font-weight: bold;
    margin-left: 0.3rem;
  }
`;

export const BoardViews = styled.div`
  margin-left: 0.5rem;
  span {
    font-weight: bold;
    margin-left: 0.3rem;
  }
`;

export const BoardContentProvider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BoardLikesProvider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardLikes = styled.span`
  font-size: 32px;
  margin: 0.2rem auto;
`;

export const BoardComments = styled.div`
  margin: 1rem;
  span {
    margin-left: 0.3rem;
    color: ${theme.gray["300"]};
  }
`;
export const BoardCommentsProvider = styled.div`
  width: 70%;
  margin-top: 7rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

export const BoardContent = styled.div`
  width: 80%;
`;

export const BoardLine = styled.hr<{
  width: string;
}>`
  width: ${(props) => props.width}%;
  border: 1px solid #eee;
  background-color: #eee;
  margin: 1rem 0;
`;

export const BoardReply = styled.div``;
