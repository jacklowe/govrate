import { combineReducers } from "redux";
import mathReducer from "./mathReducer";
import govReducer from "./govReducer";
import userReducer from "./userReducer";

export default combineReducers({
  math: mathReducer,
  govs: govReducer,
  user: userReducer
});
