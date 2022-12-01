import instance from "../../../lib/instance";
import { ImagePostResponseType } from "../interface";

export const postEditorImage = async (
  file: File
): Promise<ImagePostResponseType> => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const { data } = await instance.post(`/photo`, formData);
    return data;
  } catch (err) {
    throw err;
  }
};
