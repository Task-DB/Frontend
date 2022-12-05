import instance from "../../../lib/instance";
import { MyType } from "../interface";

export const getMyQuestionData = async (): Promise<MyType> => {
  try {
    const { data } = await instance.get("/user");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMySavedQuestionData = async () => {
  try {
    const { data } = await instance.get("/user/saved/questions");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMyIntroduceData = async () => {
  try {
    const { data } = await instance.get("/user/questions");
    return data;
  } catch (error) {
    throw error;
  }
};
