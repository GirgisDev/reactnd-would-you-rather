import { RECEIVE_USERS, ADD_TO_ANSWERED_QUESTION, ADD_TO_CREATED_QUESTION } from "../actions/users.action";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.users }
    case ADD_TO_ANSWERED_QUESTION:
      const { authedUser, qid, answer } = action.questionData;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case ADD_TO_CREATED_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.id])
        }
      }
    default:
      return state;
  }
}