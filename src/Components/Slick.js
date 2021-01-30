import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    accessibility: true,
    //arrows: true,
    //draggable: true,
    //vertical: true,
    //verticalSwiping: true,
    //dotsClass: "vertical-dots",
    
  }

  return (
    <>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
      <div>
        <h3>10</h3>
      </div>
      <div>
        <h3>11</h3>
      </div>
      <div>
        <h3>12</h3>
      </div>
    </Slider>
    </>
  )
}



