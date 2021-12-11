import axios from "axios";

const URL = process.env.VUE_APP_BACKEND_URL;

const instance = axios.create({
  baseURL: "https://sheltered-cliffs-49107.herokuapp.com/",
});

export default instance;
