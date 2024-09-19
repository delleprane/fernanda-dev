import { reviews } from "../../utils/information"
import Carousel from "../Carousel"
import "./Review.css"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from "../Button";

export function Review() {
    return (
        <div className="review">
            <div className="review-container">
                <h2>Opnioes</h2>
                <div className="bg">
                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        className="swiper-review">
                        {reviews.map((item =>
                            <SwiperSlide>
                                <div className="carousel-container">
                                    <h2>{item.title}</h2>
                                    <h3>{item.subTitle}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}