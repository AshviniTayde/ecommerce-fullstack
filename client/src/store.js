import { configureStore } from "@reduxjs/toolkit";
import rootreducers from "./Components/redux/reducers/main";

const store = configureStore({
  reducer: rootreducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
