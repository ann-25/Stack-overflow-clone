/*Combine all the redusers */

import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import postReducer from "./post";
import chatbot from "./chatbot";
import orderReducer from "./orderReducer";
import subscribedReducer from "./subscribedReducer";
import otpreducer from "./otpreducer";
export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  postReducer,
  chatbot,
  orderReducer,
  subscribedReducer,
  otpreducer,
});
