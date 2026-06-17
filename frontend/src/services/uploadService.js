import API from "../api";

export const uploadFile =
  async (file) => {
    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const { data } =
      await API.post(
        "/upload",
        formData
      );

    return data;
  };