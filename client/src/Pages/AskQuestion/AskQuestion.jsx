import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";
localStorage.setItem("permission", JSON.stringify({ data: 0 }));

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  // const [permission, setPermission] = useState(0);
  const [checkvar, setCheckvar] = useState(4);

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const localSubs = JSON.parse(localStorage.getItem("Subcribed"));

  const amount = User && localSubs.data.result.amount;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const permission2 = JSON.parse(localStorage.getItem("permission")).data;

    if (
      (amount == "10000" && permission2 >= 5 && permission2 <= 10) ||
      permission2 === 1
    ) {
      localStorage.setItem(
        "permission",
        JSON.stringify({ data: permission2 + 1 })
      );
    } else if (amount == "100000") {
      localStorage.setItem("permission", JSON.stringify({ data: -1 }));
    }
    const permission = JSON.parse(localStorage.getItem("permission")).data;

    if (
      User &&
      (permission === 0 ||
        (permission > 5 && permission <= 10) ||
        permission === -1)
    ) {
      if (questionTitle && questionBody && questionTags) {
        if (permission === 0) {
          localStorage.setItem("permission", JSON.stringify({ data: 5 }));
        }
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result._id,
            },
            navigate
          )
        );
      } else alert(" Please enter all the fields");
    } else if (User) {
      alert("Subscribe to ask more Question");
    } else {
      alert(" Login to ask question");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "/n");
    }
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person.
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>

            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all informations someone would need to answer your
                question.
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyDown={handleEnter}
              />
            </label>

            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what your question is about.</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. XML typescript wordpress"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="review-btn"
          />
        </form>

        {}
      </div>
    </div>
  );
};

export default AskQuestion;
