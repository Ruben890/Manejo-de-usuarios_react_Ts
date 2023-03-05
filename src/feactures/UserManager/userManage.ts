import { createSlice } from "@reduxjs/toolkit";

interface Users {
  id: number;
  name: string;
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

const checkEmptyFields = (name: string, email: string, sex: string) => {
  if (name === "") {
    return "name";
  } else if (email === "") {
    return "email";
  } else if (sex === "") {
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
      const { name, email, sex } = action.payload;
      const emptyField = checkEmptyFields(name, email, sex);
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
