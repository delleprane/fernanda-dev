import "./Education.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { buttonCertification, education } from "../../utils/information";


export function Education() {
    return (
        <div className="education" id='educacao'>
            <div className="education-container">
                <h2>Educacao</h2>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[ Autoplay]}
                    className="swiper-education"
                >
                    {education.map((item =>
                        <SwiperSlide>
                            <div className="swiper-content">
                                <div className="image">
                                    <img
                                        className='certification-image'
                                        src={`${item.certificationImage}`}
                                        alt={`certification-${item.name}`} />
                                </div>
                                <div className="title">
                                    <h2>{item.name}</h2>
                                    <h3>{item.institution}</h3>
                                </div>
                                {item.certification ?
                                    <div className="see-more">
                                        <a
                                            href={`${item.certification}`}
                                            className="certificate"
                                            download
                                        >
                                            {buttonCertification}
                                        </a>
                                    </div>
                                    :
                                    null}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


