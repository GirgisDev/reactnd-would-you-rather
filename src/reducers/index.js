import { combineReducers } from "redux";
import users from "./users.reducer";
import questions from "./questions.reducer";

export default combineReducers({
  users,
  questions
})