import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'




const Testimonial = () => {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      infinite: true,
    }
  return (
     <div className="slider-container">
        <div className='carousel'>
            <div className='testimonial-heading'>
                <h2>We Believe in Quality</h2>
            </div>
        </div>
        <Slider {...settings} className='large_device_slider'>
            <div className='carousel-item-1'>
                <div className='item-one'>
                    <h4 className = "item-heading">
                        We' re socially celebrated
                    </h4>
                    <p>
                        Our customer centric approach has got us amazing reviews. Be it any platform, you will see many users recommending our service.
                    </p>
                </div>

            </div>
            <div className='carousel-item-2'>
                <div className='item-one'>
                    <h4 className = "item-heading">
                        Ready to serve you in 40+ cities!
                    </h4>
                    <p>
                        Think of a city & we are mostly there. The next time you plan on exploring a city, know that your means of transport is sorted with Royal Brothers.
                        <b>#BhaiHaiNa</b>
                    </p>
                </div>
            </div>
            <div className='carousel-item-3'>
                <div className='item-one'>
                    <h4 className = "item-heading">
                       Bikes maintained so good,
                        <br/>
                       you will feel it is brand-new
                    </h4>
                    <p>
                       We obsess on giving you the best possible experience. This is not only with well serviced bikes but also with a 24/7 support team available just a call away.

                    </p>
                </div>
            </div>
        </Slider>
        <Slider className='mobile_carousel_item' {...settings}>
                <div className='mobile-item'>
                    <h4 className = "item-heading">
                        We're Socially Celebrated
                    </h4>
                    <img alt='logo' src="https://i.ibb.co/1nYhjfq/Screenshot-2023-07-15-181241.png" />
                </div>
                <div className='mobile-item'>
                    <h4 className = "item-heading">
                        Ready to serve you in 40+ cities!
                    </h4>
                    <img alt='logo' src='https://i.ibb.co/d2yxWZ7/Screenshot-2023-07-15-181258.png' />
                </div>
                <div className='mobile-item'>
                    <h4 className = "item-heading">
                       Bikes maintained so good,
                        <br/>
                       you will feel it is brand-new
                    </h4>
                    <img alt='logo' src='https://i.ibb.co/NVF9vyn/Screenshot-2023-07-15-180945.png' />
                </div>
        </Slider>
      </div>
  )
}

export default Testimonial