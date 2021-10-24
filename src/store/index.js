import { createStore } from "vuex";
import fetchMurals from "./murals/actionCreator";

export default createStore({
  modules: {
    fetchMurals,
  },
});
