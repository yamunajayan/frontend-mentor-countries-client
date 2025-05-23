import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import countryReducer from "./countriesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
