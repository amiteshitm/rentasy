import { combineReducers } from "redux";
import user from "./user";
import todo from "./todo";
import getProfileReducer from "./getProfileDetailReducer";

export default combineReducers({
  user,
  todo,
  getProfileReducer,
});
