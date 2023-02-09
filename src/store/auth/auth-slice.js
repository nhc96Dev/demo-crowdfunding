const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authLogin: (state, action) => ({
      ...state,
    }),
    authUpdateUser: (state, action) => ({
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authRefreshToken: (state, action) => ({}),
    authLogOut: (state, action) => ({}),
  },
});

export const {
  authRegister,
  authLogin,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogOut,
} = authSlice.actions;
export default authSlice.reducer;
