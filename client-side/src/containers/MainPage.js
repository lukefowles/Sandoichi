import React from 'react';
import "../styles/mainpage.css"
import "../styles/productPage.css"
import NavBar from "../components/NavBar"
import LandingPage from './LandingPage';
import ProductPage from './ProductPage';
import Footer from '../components/Footer';

function MainPage() {
  
  return <>
    <NavBar/>
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

