import instance from "../../../lib/instance";

export const getSearch = async (keyword: string) => {
  try {
    const { data } = await instance.get(`question/search?q=${keyword}`);
    return data?.data.questions;
  } catch (error) {
    throw error;
  }
};

export const handleSearch = async (keyword: string) => {
  const data = await getSearch(keyword);
  console.log(data);
  return data;
};
