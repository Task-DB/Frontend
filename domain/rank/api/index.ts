import instance from "../../../lib/instance";

export const getRankData = async (): Promise<unknown[]> => {
  try {
    const { data } = await instance.get(`/user/rank`);
    const rankData: unknown[] = [...Object.values(data.data)];
    return rankData;
  } catch (error) {
    throw error;
  }
};
