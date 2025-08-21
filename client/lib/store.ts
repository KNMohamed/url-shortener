import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./features/url/urlSlice";
import { RootState } from "./features/types";

export const store = (preloadedState?: RootState) => configureStore({
  reducer: {
    url: urlReducer,
  },
  preloadedState
});

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export default store;