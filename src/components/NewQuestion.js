import React, { useState } from 'react'
import { connect } from 'react-redux';
import { handleAddQuestion } from "./../actions/questions.action";

const NewQuestion = ({ dispatch, authedUser, history }) => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const submitQuestion = e => {
    e.preventDefault();
    if (!optionOneText || !optionTwoText) return;

    const question = {
      optionOneText,
      optionTwoText,
      author: authedUser
    }
    dispatch(handleAddQuestion(question, () => {
      history.push("/");
    }));
  }

  return (
    <div className="card questions-card">
      <h5 className="card-header text-center">Create new question</h5>
      <div className="card-body">
        <p>Complete the question</p>
        <h6>Would you rather...</h6>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter option one text here"
            onInput={e => setOptionOneText(e.target.value)} />
        </div>

        <div className="divider">
          <hr className="divider__ruler" />
          <span className="divider__text">OR</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter option two text here"
            onInput={e => setOptionTwoText(e.target.value)} />
        </div>

        <button
          onClick={submitQuestion}
          disabled={!optionOneText || ! optionTwoText}
          type="button" className="btn btn-block btn-success">Submit</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(NewQuestion);