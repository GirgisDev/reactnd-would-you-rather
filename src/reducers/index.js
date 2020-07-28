import { combineReducers } from "redux";
import users from "./users.reducer";
import questions from "./questions.reducer";
import authedUser from "./authedUser.reducer";
import { loadingBarReducer } from "react-redux-loading"

export default combineReducers({
  users,
  authedUser,
  questions,
  loadingBar: loadingBarReducer
})