import { createSlice } from "@reduxjs/toolkit";

interface Login {
  usernames: string;
  password: string;
  is_Authenticated: boolean;
  message: string;
}

const initialState: Login = {
  usernames: "Admin",
  password: "Admin1098",
  is_Authenticated: false,
  message: "",
};

export const loginSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { usernames, password } = action.payload;
      if (usernames === state.usernames && password === state.password) {
        state.is_Authenticated = true;
        state.message = "Authentication success";
        localStorage.setItem("loggedIn", "true");
      } else {
        state.message = "contraseña o usuario es  incorrecto";
      }
    },
  },
});

export default loginSlice.reducer;
export const { loginSuccess } = loginSlice.actions;
