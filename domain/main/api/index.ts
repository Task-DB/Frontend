import instance from "../../../lib/instance";

export const getCategoryProblemData = async (category: string) => {
  try {
    const { data } = await instance.get(`/question${category}`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const postToken = async (token: string) => {
  try {
    const { data } = await instance.post(`/notification/permit`, {
      token: token,
    });
    return data?.data;
  } catch (error) {
    throw error;
  }
};
