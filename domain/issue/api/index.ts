import instance from "../../../lib/instance";

export const getAllIssueData = async (param?: string) => {
  try {
    const { data } = await instance.get("/question");
    return data;
  } catch (error) {
    throw error;
  }
};
