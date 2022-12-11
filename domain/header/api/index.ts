import instance from "../../../lib/instance";

export const getSearch = async (keyword: string) => {
  try {
    const { data } = await instance.get(`question/search?q=${keyword}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleSearch = (keyword: string) => {
  getSearch(keyword)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
