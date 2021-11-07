import DatabaseService from "../../services/database";
import mutations from "./mutations";

const state = () => ({
  loading: false,
  murals: [],
  error: null,
});

const actions = {
  async fetchMurals({ commit }) {
    commit("GetMuralsBegin");
    try {
      const response = await DatabaseService.getMurals();


      commit("GetMuralsFinished", response);
    } catch (error) {
      console.log("Error: ", error);
      commit("GetMuralsError", error);
    }
  },
};

export default {
  state,
  actions,
  mutations,
};
