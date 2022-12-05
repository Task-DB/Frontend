import instance from "../../../lib/instance";
import { BoardPostType, EditorFormValue, ImagePostResponseType } from "../interface";

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

export const postBoard = async (boardData: EditorFormValue) => {
  try {
    const { data } = await instance.post("/question/new", boardData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleWrite = async (data: BoardPostType) => {
  postBoard(data)
    .then((_) => {
      alert("작성에 성공했습니다.");
    })
    .catch((error) => {
      console.log(error);
      alert("작성에 실패하였습니다. \n 나중에 다시 시도해주세요.");
    });
};
