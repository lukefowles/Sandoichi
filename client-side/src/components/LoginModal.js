import React from 'react'
import { useDispatch} from 'react-redux'
import '../styles/usermodal.css'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import axios from "axios";
import {changeName, changeEmail, changeOrders, changePassword, changeAddress, changeId} from '../redux-elements/user';
import {logIn, logOut} from '../redux-elements/login'
import {clearUser} from '../redux-elements/user';


function LoginModal({showLogin,  loggedIn, signUp, setShowSignUp, changeShowLogin, user}) {

    const showLoginModal = showLogin ? "modal display-block" : "modal display-none";
    
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOut())
        dispatch(clearUser())
    }

     //Function which changes state of sign up form
  function changeSignUp() {
    setShowSignUp(!signUp)
  }
  
  //Function to handle login submit
  function onLoginSubmit(email, password) {
    axios.post('/users/login', 
    {
      "email": email,
      "password": password
  
    })
    .then((result) => {
      // localStorage.setItem('token', result.headers['auth-token'])
      alert(result.data)
      //Then get the user information to store in state
      axios.get('/users/user', {
        headers: {
          "email": email
        }
      })
      .then((result) => {
        console.log(result.data);
        dispatch(changeName(String(result.data.name)))
        dispatch(changeEmail(String(result.data.email)));
        dispatch(changeAddress(String(result.data.address)));
        dispatch(changePassword(String(result.data.password)));
        dispatch(changeOrders(Array(result.data.orders)));
        dispatch(changeId(String(result.data._id)))
        dispatch(logIn());
        changeShowLogin()
      })
      .then(() => {console.log(user)})
    })
    .catch((err) => alert(err.response.data))
  }

    function onSignUpSubmit(email, password, name, address) {
        axios.post('/users/add', {
          "email": email,
          "name": name,
          "password": password,
          "address": address
        })
        .catch((err) => alert(err.response.data))
        .then(() => onLoginSubmit(email,password))
      }

    const renderSwitch = () => {
        if(loggedIn){
            console.log(loggedIn)
            return <div className={showLoginModal}>
                <button onClick={logout}>Log out</button>
            </div>
            
        }
        else if(!signUp){
        return <div className={showLoginModal}>
            <div className="loginModal">
                <h2 className="loginForm">Login Form</h2>
                <LoginForm  onLoginSubmit={onLoginSubmit}/>
                <p className="signUp">Don't have an account?</p>
                <button className="signUp" id="signUpButton" onClick={changeSignUp}>Create Account</button>
            </div>
        </div>

        }else{

        return <div className={showLoginModal}>
            <div className="loginModal">
                <h2 className="signUpForm">Sign Up Form</h2>
                <SignUpForm onSignUpSubmit={onSignUpSubmit}/>
            </div>

        </div>
        }
    }


    return <>{renderSwitch()}</>
    
}
export default LoginModal;