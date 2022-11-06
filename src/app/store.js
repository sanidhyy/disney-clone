import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

// user data store
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
