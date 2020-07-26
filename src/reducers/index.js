import { combineReducers } from "redux";
import users from "./users.reducer";
import questions from "./questions.reducer";
import authedUser from "./authedUser.reducer";

export default combineReducers({
  users,
  authedUser,
  questions
})