import React from 'react';
import Carousel, {CarouselItem} from '../components/Carousel';
import "../styles/carousel.css"
import StartOrderButton from '../components/StartOrderButton';


function LandingPage() {
  return(
    <div className="carousel-area">
    <Carousel>
        <CarouselItem className="carousel-component" index="item1"></CarouselItem>
        <CarouselItem index="item2"></CarouselItem>
        <CarouselItem index="item3"></CarouselItem>
    </Carousel>
    <StartOrderButton/>
    </div>
  );
}

export default LandingPage;
