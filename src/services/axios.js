import axios from "axios";

const URL = process.env.VUE_APP_BACKEND_URL;

const instance = axios.create({
  baseURL: URL,
});

export default instance;
