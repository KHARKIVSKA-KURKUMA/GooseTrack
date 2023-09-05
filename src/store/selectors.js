/* ------------------------------ task selector ----------------------------- */
export const tasksSelector = state => state.tasks;
/* ------------------------------ data selector ----------------------------- */
export const selectedDateSelector = state => state.date.currentDate;
/* ---------------------------- feedback selector --------------------------- */
export const feedbackSelector = state => state.feedback;
export const feedbackIsLoadingSelector = state => state.feedback.isLoading;
