import React from 'react';
import "../styles/mainpage.css"
import "../styles/productPage.css"
import NavBar from "../components/NavBar"
import LandingPage from './LandingPage';
import SideBar from '../components/SideBar';

function MainPage() {
  
  return <>
    <NavBar/>
      <section className="landing-page" id="landing-page">
        <LandingPage/>
      </section>
      <div className="product-page">
        <SideBar/>
        <section className="sandwiches areas" id="sandwiches">
        </section>
        <section className="snacks areas" id="snacks">
        </section>
        <section className="drinks areas" id="drinks">
        </section>
      </div>
      <footer className="footer areas" id="footer">
        </footer>
  </>;
}

export default MainPage;

