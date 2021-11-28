export default {
  GetMuralsBegin(state) {
    state.loading = true;
    state.error = null;
    state.murals = [];
  },

  GetMuralsFinished(state, data) {
    state.loading = false;
    state.murals = data;
  },

  GetMuralsError(state, error) {
    state.loading = false;
    state.error = error;
  },

  SaveNewMuralBegin(state) {
    state.loading = true;
    state.error = null;
    state.newMural = null;
  },

  SaveNewMuralFinished(state, data) {
    state.newMural = data;
    state.loading = false;
  },

  SaveNewMuralError(state, error) {
    state.loading = false;
    state.error = error;
  }

};
