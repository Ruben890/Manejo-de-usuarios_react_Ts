import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feactures/UserManager/userManage";
import LoginReducer from "../feactures/auth/actions_login";
export const store = configureStore({
  reducer: {
    users: userReducer,
    admin: LoginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
