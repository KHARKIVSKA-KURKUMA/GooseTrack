export const selectorError = state => state.auth.error;
export const selectorIsLogin = (state) => state.auth.isLogin;
export const selectorUser = (state) => state.auth.user;
export const selectorToken = (state) => state.auth.token;
export const selectorAuth = (state) => state.auth;


// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const selectUser = state => state.auth.user;

// export const selectIsRefreshing = state => state.auth.isRefreshing;

// export const selectAccessToken = state => state.auth.accessToken;