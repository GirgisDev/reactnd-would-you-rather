import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions.action";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {...action.questions}
    case ADD_QUESTION:
      return {...state, ...action.question}
    case ANSWER_QUESTION:
      const { id, option, loggedInUser } = action;
      return {
        ...state, 
        [id]: {
          ...state[id],
          [state[id][option]]: {
            ...state[id][option],
            votes: state[id][option]['votes'].concat([loggedInUser]) 
          }
        }
      }
    default:
      return state;
  }
}