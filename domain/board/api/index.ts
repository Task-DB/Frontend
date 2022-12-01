import instance from "../../../lib/instance";
import { CommentsDataType, dynamicRouteType } from "../interface";

export const getBoardData = async (
  boardId: dynamicRouteType
): Promise<{ title: "OPEN" }> => {
  try {
    const { data } = await instance.get(`/question/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReply = async (
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
