//used for auth request

import express from "express";
import {signup, login} from '../controllers/authControl.js' //since there is no default export in auth.js, we use {}
import {follow, unfollow, getAllUsers, updateProfile} from '../controllers/users.js'
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post('/signup', signup) //if the req is post then it will signup. If it's sign up, all the conditions are specified here.()=>{} is a call-back function.
//inorder to avoid large number of codes, we replace () => {} with signup and login
router.post('/login', login) //if the connection is like localhost:5000/user/login, then this logic is executed.

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id',auth, updateProfile) //auth: middleware, updateProfile: ctrler
router.put("/follow/:id", auth, follow);
router.put("/unfollow/:id", auth, unfollow);


export default router;