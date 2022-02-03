import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setActiveIndex, setPaused} from "../redux-elements/carousel";
import previousArrow from "../img/img/arrowl.png"
import nextArrow from "../img/img/arrowr.png"



export const CarouselItem = ({children, width, index}) => {
    return (
        <div className="carousel-item" style={{width: width}} id={index}>
            {children}
        </div>
    )
}

const Carousel = ({children}) => {

    const activeIndex = useSelector((state) => state.carousel.activeIndex)
    const paused = useSelector((state) => state.carousel.paused)
    const dispatch = useDispatch()

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = React.Children.count(children) -1;
        }else if (newIndex >= React.Children.count(children)){
            newIndex = 0;
        }

        dispatch(setActiveIndex(newIndex))

    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(!paused){
                updateIndex(activeIndex + 1);
            }
        }, 2500);

        return () => { if(interval) {
            clearInterval(interval)
        }}
    })

    return(
        <div className="carousel">
            <div className ="tagline">
                <h1>Gourmet sandwiches delivered straight to your door</h1>
            </div>
            <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}  
            onMouseEnter={() => dispatch(setPaused(true))}
            onMouseLeave={() => dispatch(setPaused(false))}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className='indicators'>
                <button onClick={() => {
                    updateIndex(activeIndex -1);
                }}> <img src={previousArrow} alt="previous" width="50"/> </button>
                {React.Children.map(children, (child, index) => {
                    return(
                        <button className={`${index === activeIndex ? "active" : ""} indexIndicator`} onClick={() => {
                            updateIndex(index);
                        }}></button>
                    )
                })}
                <button onClick={() => {
                    updateIndex(activeIndex +1);
                }}> <img src={nextArrow} alt="next" width="50"/> </button>
            </div>
        </div>
    )
}
export default Carousel;