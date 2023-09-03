export const handleFulfilled = state => {
  state.loading = false;
  state.error = null;
};
export const handlePending = state => {
  state.loading = true;
  state.error = null;
};
export const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
