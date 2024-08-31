import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./core/api/api_slice";
// import { changeStatusAddAccountPopupSlice } from "./is-add-account-popup-open";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // changeStatusAddAccountPopupSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
