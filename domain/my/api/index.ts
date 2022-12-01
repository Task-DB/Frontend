import instance from "../../../lib/instance";

export const getMyQuestionData = async () => {
  try {
    const { data } = await instance.get("/user/questions");
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


