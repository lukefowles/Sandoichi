import React from 'react';
import "../styles/mainpage.css"
import "../styles/productPage.css"
import NavBar from "../components/NavBar"
import LandingPage from './LandingPage';
import ProductPage from './ProductPage';
import Footer from '../components/Footer';
import {useState, useEffect} from 'react';
import LoginModal from '../components/LoginModal'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {changeName, changeEmail, changeOrders, changePassword, changeAddress} from '../redux-elements/user';
import {logIn, logOut} from '../redux-elements/login'

function MainPage() {

  //State to monitor login modal
  const[showLogin, setShowLogin] = useState(false);
  const [signUp, setShowSignUp] = useState(false)

  const user = useSelector((state) => state.user.user)
  const loggedIn = useSelector((state) => state.loggedIn)
  const dispatch = useDispatch();

  //Function which changes the state of login modal
  function changeShowLogin() {
    setShowSignUp(false)
    setShowLogin(!showLogin)
    console.log('works')
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
        // console.log(result.data.name);
        dispatch(changeName(String(result.data.name)))
        dispatch(changeEmail(String(result.data.email)));
        dispatch(changeAddress(String(result.data.address)));
        dispatch(changePassword(String(result.data.password)));
        dispatch(changeOrders(Array(result.data.orders)));
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
  
  return <>
    <NavBar changeShowLogin={changeShowLogin}/>
    <LoginModal onLoginSubmit={onLoginSubmit} showLogin={showLogin} signUp={signUp}
     changeSignUp={changeSignUp} onSignUpSubmit={onSignUpSubmit}/>
    <section className="landing-page" id="landing-page">
      <LandingPage/>
    </section>
    <div className="product-page">
      <section className="sandwiches areas" id="sandwiches">
        <ProductPage productType={"sandwich"}/>
      </section>
      <section className="snacks areas" id="snacks">
        <ProductPage productType={"side"}/>
      </section>
      <section className="drinks areas" id="drinks">
        <ProductPage productType={"drink"}/>
      </section>
    </div>
    <footer className="footer areas" id="footer">
      <Footer />
      </footer>
  </>;
}

export default MainPage;

