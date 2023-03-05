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
      const { usernames, password } = action.payload; //aqui recibe el usuario y la contraseña del login
      if (usernames === state.usernames && password === state.password) {
        // aqui valida si el usuario y contraseña son corectas
        state.is_Authenticated = true;
        state.message = "Authentication success";
        localStorage.setItem("loggedIn", "true"); /// esto guarda  un boolean en el localStorage que verificar si estas logeado o no
      } else {
        state.message = "contraseña o usuario es  incorrecto";
      }
    },
  },
});

export default loginSlice.reducer;
export const { loginSuccess } = loginSlice.actions;
