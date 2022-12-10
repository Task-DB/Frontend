import instance from "../../../lib/instance";

export const getCategoryProblemData = async (category: string) => {
  try {
    const { data } = await instance.get(`/question${category}`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
