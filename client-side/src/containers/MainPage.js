import React from 'react';
import "../styles/mainpage.css"
import "../styles/productPage.css"
import NavBar from "../components/NavBar"
import LandingPage from './LandingPage';
import ProductPage from './ProductPage';
import Footer from '../components/Footer';
import {useState} from 'react';
import LoginModal from '../components/LoginModal'
import {useSelector} from 'react-redux'


function MainPage() {

  //State to monitor login modal
  const[showLogin, setShowLogin] = useState(false);
  const [signUp, setShowSignUp] = useState(false)
  

  const user = useSelector((state) => state.user.user)
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn)

  //Function which changes the state of login modal
  
  function changeShowLogin() {
    setShowSignUp(false)
    setShowLogin(!showLogin)
    console.log('works')
  }
 

  
  
  return <>
    <NavBar changeShowLogin={changeShowLogin}/>
    <LoginModal showLogin={showLogin} loggedIn={loggedIn} signUp={signUp} setShowSignUp={setShowSignUp} changeShowLogin={changeShowLogin} user={user}/>
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

