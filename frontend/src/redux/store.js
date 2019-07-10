import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [logger];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
