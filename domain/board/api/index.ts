import instance from "../../../lib/instance";
import { DynamicRouteType, IndividualBoardType } from "../interface";

export const getBoardData = async (
  boardId: DynamicRouteType | number
): Promise<IndividualBoardType> => {
  try {
    const { data } = await instance.get(`/question/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postComment = async (
  boardId: DynamicRouteType | number,
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

export const putAdopt = async (boardId: DynamicRouteType | number) => {
  try {
    const { data } = await instance.put(`/answer/${boardId}/adopt`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReply = async (
  boardId: DynamicRouteType | number,
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
  boardId: DynamicRouteType | number,
  commentsData: { content: string }
) => {
  postComment(boardId, commentsData)
    .then((_) => {
      alert("댓글 작성이 완료되었습니다.");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("댓글 작성에 실패하였습니다.");
    });
};

export const handleReply = (
  boardId: DynamicRouteType | number,
  commentsData: { content: string }
) => {
  postReply(boardId, commentsData)
    .then((_) => {
      alert("답변 작성이 완료되었습니다.");
      location.reload();
    })
    .catch((_) => {
      alert("답변 작성에 실패하였습니다.");
    });
};

export const handleAdopt = async (boardId: DynamicRouteType | number) => {
  putAdopt(boardId)
    .then((_) => {
      alert("채택되었습니다.");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const putComment = async (boardId: DynamicRouteType | number) => {
  try {
    const { data } = await instance.put(`/comment/${boardId}/edit`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (boardId: DynamicRouteType | number) => {
  try {
    const { data } = await instance.delete(`/comment/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putAnswer = async (boardId: DynamicRouteType | number) => {
  try {
    const { data } = await instance.put(`/answer/${boardId}/edit`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteAnswer = async (boardId: DynamicRouteType | number) => {
  try {
    const { data } = await instance.delete(`/answer/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putLike = async (boardId: DynamicRouteType) => {
  try {
    const { data } = await instance.put(`/questionLike/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putUnLike = async (boardId: DynamicRouteType) => {
  try {
    const { data } = await instance.put(`/questionUnlike/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putAnswerLike = async (boardId: DynamicRouteType) => {
  try {
    const { data } = await instance.put(`/answerLike/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putAnswerUnLike = async (boardId: DynamicRouteType) => {
  try {
    const { data } = await instance.put(`/answerUnlike/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
