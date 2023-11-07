import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slices/main.slice";
import itemReducer from "./Slices/items.slice";

const store = configureStore({
   reducer: {
      mainReducer,
      itemReducer,
   },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
