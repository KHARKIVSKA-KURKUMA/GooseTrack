export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
