import thunk from "redux-thunk";
import promise from "redux-promise";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// Reducers
import cartReducer from "./reducers/cartReducer";
import searchReducer from "./reducers/searchReducer";

const makeStore = () =>
  configureStore({
    reducer: {
      cartProducts: cartReducer,
      searchPlayer: searchReducer,
    },
    middleware: [thunk, promiseMiddleware, promise, logger],
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
