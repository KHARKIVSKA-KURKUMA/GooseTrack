export const handlePending = state => {
  state.isLoading = true;
  state.isExist = false;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isExist = false;
  state.error = payload;
};
