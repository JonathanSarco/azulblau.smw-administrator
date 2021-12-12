import {
  convertTitleToLowerAndSnakeCase,
  getExtensionFromFileName,
} from "../helpers/muralsHelpers";
import axios from "./axios";

const storeSecondayPictures = async (payload) => {
  const titleMainPicture = convertTitleToLowerAndSnakeCase(payload.title);
  const fileExtension = getExtensionFromFileName(payload.mainMural.name);

  const secondaryFormData = new FormData();
  secondaryFormData.append("muralId", titleMainPicture);
  secondaryFormData.append("extensionMural", fileExtension);

  for (const single_file of payload.secondaryMurals) {
    secondaryFormData.append("secondaryMurals", single_file);
  }

  const responseSecondaryMurals = await axios.post(
    "/v1/artist/innerPictures",
    secondaryFormData
  );

  return responseSecondaryMurals;
};

const getDataFromPayloadToFormData = (payload) => {
  const titleMainPicture = convertTitleToLowerAndSnakeCase(payload.title);
  const fileExtension = getExtensionFromFileName(payload.mainMural.name);

  const formData = new FormData();
  formData.append("muralId", titleMainPicture + "." + fileExtension);
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("date", payload.date);
  formData.append("tags", payload.tags);
  formData.append("discussion", payload.discussion);
  formData.append("mainMural", payload.mainMural);

  return formData;
};

const storeArtist = async (payload) => {
  const secondaryPictures = storeSecondayPictures(payload);
  console.log("Secondary Murals ", secondaryPictures);
  const formData = getDataFromPayloadToFormData(payload);

  const responseMainMural = await axios.post("/v1/artist", formData);
  console.log("Main Murals ->", responseMainMural);

  if (responseMainMural.status == 201) {
    console.log("Coming back from store image", responseMainMural);
  }

  return responseMainMural;
};

const getMurals = async (payload) => {
  const response = await axios.get(
    `/v1/artist?limit=${payload.limit}&offset=${payload.offset}`
  );
  return response;
};

export { storeArtist, getMurals };
