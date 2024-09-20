

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Button } from "../Button";
import './Carousel.css';
import { projects } from "../../utils/information"

import { Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween:10
          },
          768: {
            slidesPerView: 1,
            spaceBetween:10
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="swiper-projects"
      >
          {projects.map(((item,index) =>
                <SwiperSlide className='web-slide' key={index}>
                    <div className="swiper-container">
                        <h2>{item.title}</h2>
                        <div className="content">
                            <p>{item.content}</p>
                            <h3>{item.features.title}:</h3>
                            <p>{item.features.text}</p>
                            <ul>
                                {item.features.list.map(((obj,index) =>
                                    <li key={index}>{obj}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="tec">
                            <h3>{item.features.technology.title}:</h3>
                            <ul>
                                {item.features.technology.list.map(((value,index) =>
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="buttons">
                        <a target="_blank" rel="noopener noreferrer" href={item.url}>Ver projeto ao vivo</a>
                        <a target="_blank" rel="noopener noreferrer" href={item.github}>Ver codigo</a>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}



