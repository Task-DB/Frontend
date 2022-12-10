import instance from "../../../lib/instance";

export const getCategoryProblemData = async (category: string) => {
  const { data } = await instance.get(`/question${category}`);
  return data;
};
