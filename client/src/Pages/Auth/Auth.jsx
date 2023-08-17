import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'

import { signUp, logIn } from '../../actions/auth'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
 
 
const dispatch = useDispatch()
const navigate = useNavigate()

  const handleSwitch= () =>{
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email && !password){
      alert('enter email and password')

    }

    if(isSignup){
      if(!name){
        alert("Enter name to continue.")
      }
      dispatch(signUp({name, email, password}, navigate))

    }else{
      dispatch(logIn({email, password}, navigate))
    }

  }
   
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
    <div className="auth-container-2">
      
        <img src={icon} alt='Stack Overflow' className='login-logo' width={55} height={60} />
        <form onSubmit={handleSubmit}>

          {
            isSignup &&(
              <label htmlFor = "name">
                <h4>Display Name</h4>
                <input type="text" id= "name" name= "name" value={name} onChange={(e) => {setName(e.target.value) }}></input>

              </label>
            )
          }

          {/*htmlFor and id are same here, so when we click the label, the input box is also selected*/}
          <label htmlFor= "email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
          </label>
        
          <label htmlFor="password">

              <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Password</h4>
              {!isSignup && 
                 ( <p style={{color: "#007ac6", font:"13px"}}>Forgot Password?</p> )
              }
              
              </div>
             
              <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
              {isSignup && <p style={{color: "#666767", font: "13px"}}>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number.</p>}
         
          </label>
          {isSignup && (
            <label htmlFor='check'>
              <input type="checkbox" id='check' />
              <p style={{font: "13px"}}>Opt-in to receive occasional product<br /> updates, user research invitations, company <br />announcements, and digests.</p>
            </label>

            )
          }
           
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log in'}</button>
          {
            isSignup && (
              <p style={{color: "#666767", font: "13px"}}>By clicking “Sign up”, you agree to our terms of <br />
              <span style={{color: "#007ac6"}}>services</span>, 
              <span style={{color: "#007ac6"}}>privacy policy</span> and
              <span style={{color: "#007ac6"}}> cookie policy </span>
              </p>
            )
          }
        </form>
        <p>{isSignup?'Already have an account?':"Don't have an account?"}</p>
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup? "Login" : "Sign Up"}</button> {
          //button to switch login to sign up and vice versa
        }

      </div>

    </section>
      
    
  )
}

export default Auth
