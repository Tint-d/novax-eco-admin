import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashboardReducer from "./feature/dashboardSlice";
import authReducer from "./feature/authSlice";
import { authApi } from "./api/authApi";
import { productsApi } from "./api/product";
import { customerApi } from "./api/customer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  dashboar: dashboardReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [customerApi.reducerPath]: customerApi.reducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(
      authApi.middleware,
      productsApi.middleware,
      customerApi.middleware
    ),
});
