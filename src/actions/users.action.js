export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_TO_ANSWERED_QUESTION = "ADD_TO_ANSWERED_QUESTION";
export const ADD_TO_CREATED_QUESTION = "ADD_TO_CREATED_QUESTION";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}
export const addToAnsweredQuestion = questionData => {
  return {
    type: ADD_TO_ANSWERED_QUESTION,
    questionData
  }
}
export const addToCreatedQuestion = ({ authedUser, id }) => {
  return {
    type: ADD_TO_CREATED_QUESTION,
    authedUser,
    id
  }
}