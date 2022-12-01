import instance from "../../../lib/instance";
import { dynamicRouteType } from "../interface";

export const getBoardData = async (boardId: dynamicRouteType) => {
  try {
    const { data } = await instance.get(`/question/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
