import { createSlice } from "@reduxjs/toolkit";

interface Users {
  id: number;
  name: string;
  last_name: string;
  last_name2: string;
  email: string;
  sex: string;
}

interface UserState {
  users: Users[];
  message: string;
}

const initialState: UserState = {
  users: [],
  message: "",
};
// funcion para validar si alguno de estos campos esta vacio
const checkEmptyFields = (
  name: string,
  email: string,
  sex: string,
  last_name: string,
  last_name2: string
) => {
  if (name === "") {
    return "name";
  } else if (last_name === "") {
    return "last_name";
  } else if (last_name2 === "") {
    return "last_name";
  } else if (email === "") {
    return "email";
  } else if (sex === "" || sex === "Sexo") {
    return "Sexo";
  } else {
    return "none";
  }
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const { name, email, sex, last_name, last_name2 } = action.payload; /// aqui esta recibiendo los datps que manda el susuario
      const emptyField = checkEmptyFields(
        name,
        email,
        sex,
        last_name,
        last_name2
      ); //esta funcon valida los datos que mando el usuario
      if (emptyField !== "none") {
        state.message = `Por favor, completa el campo ${emptyField}.`;
        return state;
      } else {
        return { ...state, users: [...state.users, action.payload] };
      }
    },
  },
});
export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
