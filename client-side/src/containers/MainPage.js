import React from 'react';
import "../styles/mainpage.css"
import NavBar from "../components/NavBar"
import Carousel, {CarouselItem} from '../components/Carousel';
import "../styles/carousel.css"

function MainPage() {
  return <div>
      <NavBar/>
      <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
      </Carousel>
  </div>;
}

export default MainPage;

