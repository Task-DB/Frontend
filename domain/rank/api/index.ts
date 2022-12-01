import instance from "../../../lib/instance";
import { RankDataType } from "../interface";

export const getRankData = async (): Promise<RankDataType[]> => {
  try {
    const { data } = await instance.get(`/user/rank`);
    const rankData: RankDataType[] = data.data;
    return rankData;
  } catch (error) {
    throw error;
  }
};
