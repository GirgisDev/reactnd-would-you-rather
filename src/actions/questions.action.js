import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  }
}
const answerQuestion = question => {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

export const handleAddQuestion = question => dispatch => {
  return saveQuestion(question).then(res => {
    dispatch(addQuestion(question));
  })
}

export const handleAnswerQuestion = question => dispatch => {
  return saveQuestionAnswer(question).then(res => {
    dispatch(answerQuestion(question));
  })
}