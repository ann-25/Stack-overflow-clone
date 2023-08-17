import express from 'express'
import {AskQuestion, getAllQuestions, deleteQuestion, voteQuestion} from '../controllers/Question.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask', auth, AskQuestion) //if a user requests to ask a question the function auth will be first executed
router.get('/get', getAllQuestions)
router.delete('/delete/:id', auth, deleteQuestion );
router.patch('/vote/:id', auth, voteQuestion)


export default router
