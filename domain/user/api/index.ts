import instance from "../../../lib/instance";
import { dynamicRouteType } from "../../board/interface";

export const getAnotherUserData = async (userId: dynamicRouteType) => {
  try {
    const { data } = await instance.get(`/user/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleAnotherUserData = (userId: dynamicRouteType) => {
  getAnotherUserData(userId)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
