import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./features/url/urlSlice";

export const store = configureStore({
  reducer: {
    url: urlReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
