import express from "express";

import {postAnswer, deleteAnswer} from '../controllers/Answers.js'
import auth from '../middlewares/auth.js'


const router = express.Router();

router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id', auth, deleteAnswer) //for updating a specific record. Here, we are deleting an answer. It doesnot require deleting the whole content.
                  //thus, patch is used.

export default router