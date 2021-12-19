import { getMurals, storeArtist } from "../../services/muralService";
import mutations from "./mutations";

const state = () => ({
  loading: false,
  murals: { total: 0, data: [] },
  newMural: null,
  error: null,
});

const actions = {
  async fetchMurals({ commit }, payload) {
    commit("GetMuralsBegin");
    try {
      const response = await getMurals(payload);
      // console.log("response", response);
      commit("GetMuralsFinished", response.data);
    } catch (error) {
      console.log("Error: ", error);
      commit("GetMuralsError", error);
    }
  },

  async saveNewMural({ commit }, payload) {
    commit("SaveNewMuralBegin");
    try {
      const response = await storeArtist(payload);
      // console.log(response.data);
      commit("SaveNewMuralFinished", response.data);
    } catch (error) {
      console.log("Error while saving new post. ", error);
      commit("SaveNewMuralError", error);
    }
  },
};

export default {
  state,
  actions,
  mutations,
};
