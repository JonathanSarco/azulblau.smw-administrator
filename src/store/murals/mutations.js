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
};
