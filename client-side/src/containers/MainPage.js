import React from 'react';
import "../styles/mainpage.css"
import NavBar from "../components/NavBar"
import Carousel, {CarouselItem} from '../components/Carousel';
import "../styles/carousel.css"
import featured from "../img/img/featured.png"

function MainPage() {
  return <div>
      <NavBar/>
      <Carousel>
          <CarouselItem index="item1"></CarouselItem>
          <CarouselItem index="item2"></CarouselItem>
          <CarouselItem index="item3"></CarouselItem>
      </Carousel>
  </div>;
}

export default MainPage;

