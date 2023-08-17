import React, {useState} from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom' 
  /* useParams : to use filter(). filter() is similar
   to map() but map() just displays all the elements of the array but
  filter() displays and can filter the elements */
import { useSelector, useDispatch } from 'react-redux'
import moment from  'moment'
import copy from 'copy-to-clipboard'

import upVotes from '../../assets/sort-up.png'
import downVotes from '../../assets/sort-down.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'

const QuestionsDetails = () => {
  const {id} = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  
 /*
  var questionsList = [{
    _id: '1',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It is meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "Ann",
    userID: 1,
    askedOn: "Jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "Mariya",
      answeredOn: "Jan 2",
      userID: 2
    }]
  },{
    _id: '2',
    upVotes: 4,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It is meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "Ann",
    askedOn: "Jan 1",
    userID: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Mariya",
      answeredOn: "Jan 2",
      userID: 2
    }]
  },{
    _id: '3',
    upVotes: 5,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It is meant to be",
    questionTags:["javascript", "R", "python"],
    userPosted: "Ann",
    askedOn: "Jan 1",
    userID: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Mariya",
      answeredOn: "Jan 2",
      userID: 2
    }]
  }]
  
*/
const [Answer,setAnswer] = useState("");
const Navigate = useNavigate();
const dispatch = useDispatch();
const User = useSelector((state) => state.currentUserReducer);
const location = useLocation();
const url = 'http://localhost:3000'

const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (User === null ){
      alert("Login or signup to answer a question");
      Navigate('/Auth');

    } else{
      if(Answer === ''){
        alert('enter an answer before submiting')
      }else{
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }));
        setAnswer('');
      }
    }
};

const handleShare = () => {
  copy(url + location.pathname)
  alert('Copied url: '+url+location.pathname);
};

const handleDelete = () => {
  dispatch(deleteQuestion(id, Navigate))
};

const handleUpVote = () => {
  if (User === null){
    alert("Login or Signup to up vote a question");
    Navigate("/Auth");
  } else{
    dispatch(voteQuestion(id, 'upVotes', User.result._id ));
  }
 
}

const handleDownVote = () => {
  if (User === null){
    alert("Login or Signup to up vote a question");
    Navigate("/Auth");
  } else {
    dispatch(voteQuestion(id, 'downVotes', User.result._id ))
  }
  
};


  return (
    <div className="question-details-page">
      {
         questionsList.data === null ? (
           <h1>Loading...</h1> 
          ) : (
         <>
           {
            questionsList.data.filter((question) => question._id === id).map((question) => (
              <div key = {question._id}> 
              <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container2'>
                  <div className="question-votes">
                    <img src={upVotes} alt="" width="18" className='votes-icon' onClick={handleUpVote}/>

                    <p>{question.upVotes.length - question.downVotes.length}</p>
                    
                    <img src={downVotes} alt="" width="18" className='votes-icon' onClick={handleDownVote} />
                  </div>

                  <div style={{width: "100%"}}>
                    <p className='question-body'>{question.questionBody}</p>
                    <div className="question-details-tags">
                      {
                        question.questionTags.map((tag) =>(
                          <p key={tag}>{tag}</p>

                        ))
                      }

                    </div>
                    <div className="question-action-users">
                      <div>
                        <button type="button" onClick={handleShare}>Share</button>
                        {
                          User?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>Delete</button>
                          )
                        }
                      
                      
                      </div>

                      <div>
                        <p>asked {moment(question.askedOn).fromNow()}</p>
                        <Link to ={`/Users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                          <Avatar backgroundColor='orange' px='5px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                          <div>
                            {question.userPosted}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </section>

            
                {
                  question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                    </section>
                  )
                }
                     <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form onSubmit={ (e) => { handlePostAns(e, question.answer.length) }}>
                          <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                          <input type="submit" className='post-ans-btn' value="Post Your Answer" />
                        </form>
                        <p>Browse other questions tagged
                        {
                          question.questionTags.map((tag) =>(
                            <Link to="/Tags " key= {tag} className='ans-tags'>{" "} {tag} {" "}</Link>
                          ))
                        }{" "} or 
                         <Link to="/AskQuestion" style={{textDecoration:"none", color:"#009dff"}}>{" "} ask your own question </Link>
                      </p>
                     </section>
             

              </div>
          

            ))
           }
         </>

      )}
     
    </div>
  );
};

export default QuestionsDetails
