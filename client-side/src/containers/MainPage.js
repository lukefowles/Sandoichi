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

function MainPage() {

  //State to monitor login modal
  const[showLogin, setShowLogin] = useState(false);

  //Function which changes the state of login modal
  function changeShowLogin() {
    setShowLogin(!showLogin)
    console.log('works')
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
      .then((result) => console.log(result))
    })
    .catch((err) => alert(err.response.data))
  }
  
  return <>
    <NavBar changeShowLogin={changeShowLogin}/>
    <LoginModal onLoginSubmit={onLoginSubmit} showLogin={showLogin}/>
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

