import { combineReducers } from "redux";
import mathReducer from "./mathReducer";
import govReducer from "./govReducer";

export default combineReducers({
  math: mathReducer,
  govs: govReducer
});
