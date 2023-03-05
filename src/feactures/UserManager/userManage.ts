import { createSlice } from "@reduxjs/toolkit";

interface Users {
  id: number;
  name: string;
  email: string;
  sex: string;
}

interface UserState {
  users: Users[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      return { ...state, users: [...state.users, action.payload] };
    },
  },
});
export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
