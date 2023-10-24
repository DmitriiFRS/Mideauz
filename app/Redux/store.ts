import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slices/mainSlice";

const store = configureStore({
  reducer: {
    mainReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
