import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users.action";
import { receiveQuestions } from "./questions.action";
import { showLoading, hideLoading } from "react-redux-loading";


export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    })
  }
}