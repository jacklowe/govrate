import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [logger, thunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
