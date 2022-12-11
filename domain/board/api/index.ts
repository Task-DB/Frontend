import instance from "../../../lib/instance";
import { dynamicRouteType, IndividualBoardType } from "../interface";

export const getBoardData = async (
  boardId: dynamicRouteType
): Promise<IndividualBoardType> => {
  try {
    const { data } = await instance.get(`/question/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postComment = async (
  boardId: dynamicRouteType,
  commentsData: { content: string }
) => {
  try {
    const { data } = await instance.post(
      `/comment/${boardId}/new`,
      commentsData
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const putAdopt = async (boardId: dynamicRouteType) => {
  try {
    const { data } = await instance.put(`/answer/${boardId}/adopt`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReply = async (
  boardId: dynamicRouteType,
  answerData: { content: string }
) => {
  try {
    const { data } = await instance.post(`/answer/${boardId}/new`, answerData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleComment = (
  boardId: dynamicRouteType,
  commentsData: { content: string }
) => {
  postComment(boardId, commentsData)
    .then((_) => {
      alert("댓글 작성이 완료되었습니다.");
    })
    .catch((_) => {
      alert("댓글 작성에 실패하였습니다.");
    });
};

export const handleReply = (
  boardId: dynamicRouteType,
  commentsData: { content: string }
) => {
  postReply(boardId, commentsData)
    .then((_) => {
      alert("답변 작성이 완료되었습니다.");
    })
    .catch((_) => {
      alert("답변 작성에 실패하였습니다.");
    });
};

export const handleAdopt = async (boardId: dynamicRouteType) => {
  putAdopt(boardId)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
