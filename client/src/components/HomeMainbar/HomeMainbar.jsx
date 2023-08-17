import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import "./HomeMainbar.css";
import NavBar from "../Navbar/Navbar";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  /*var questionsList = [{
    _id: 1,
    upVotes: 3,
    downVotes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It is meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "Ann",
    askedOn: "Jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "Mariya",
      answeredOn: "Jan 2",
      userID: 2
    }]
  },{
    _id: 2,
    upVotes: 3,
    downVotes: 3,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It is meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "Ann",
    askedOn: "Jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "Mariya",
      answeredOn: "Jan 2",
      userID: 2
    }]
  },{
    _id: 3,
    upVotes: 3,
    downVotes: 3,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It is meant to be",
    questionTags:["javascript", "R", "python"],
    userPosted: "Ann",
    askedOn: "Jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "Mariya",
      answeredOn: "Jan 2",
      userID: 2
    }]
  }]
  
 */

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Sign up to ask a question");
      navigate("./Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <Container>
        <Navbar className="main-bar-header">
          <Container expand="lg">
            <Row lg="12" sm="12">
              {location.pathname === "/" ? (
                <Col sm="6" lg="12">
                  {" "}
                  <h1>Top Questions</h1>
                </Col>
              ) : (
                <Col sm="6" lg="12">
                  {" "}
                  <h1>All Questions</h1>
                </Col>
              )}
              <Col sm="6" lg="6">
                {" "}
                <button onClick={checkAuth} className="ask-btn">
                  Ask Question
                </button>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <div>
          {questionsList.data === null ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <p>{questionsList.data.length} questions</p>
              <Col lg="12">
                {" "}
                <QuestionList questionsList={questionsList.data} />
              </Col>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomeMainbar;
