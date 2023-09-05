export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
  state.isChanged = true;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isChanged = false;
  state.error = payload;
};
