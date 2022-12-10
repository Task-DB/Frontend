import instance from "../../../lib/instance";
import {
  CommentsDataType,
  dynamicRouteType,
  IndividualBoardType,
} from "../interface";

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
  commentsData: CommentsDataType
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

export const postReply = async (
  boardId: dynamicRouteType,
  answerData: CommentsDataType
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
  commentsData: CommentsDataType
) => {
  postComment(boardId, commentsData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleReply = (
  boardId: dynamicRouteType,
  commentsData: CommentsDataType
) => {
  postReply(boardId, commentsData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
