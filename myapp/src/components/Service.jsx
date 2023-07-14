import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../content/scroll1.avif";
import img2 from "../content/scroll2.avif";
import img3 from "../content/scroll3.avif";

function Service() {

  return (
  <Carousel infiniteLoop autoPlay interval={1000}>
                <div className='imgcontainer'>
                    <img src={img1}alt="service 1" />
                    <p className="legend">Front End Developer</p>
                </div>
                <div className='imgcontainer'>
                    <img src={img2}alt="service 1"  />
                    <p className="legend">Web Designing</p>
                </div>
                <div className='imgcontainer'>
                    <img src={img3}alt="service 1" />
                    <p className="legend">Full Stack Web Developer</p>
                </div>
    </Carousel>

  )
}

export default Service