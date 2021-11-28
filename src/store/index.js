import { createStore } from "vuex";
import murals from "./murals/actionCreator";

export default createStore({
  modules: {
    murals,
  },
});
