
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import one from '../../../assets/banner/one.jpg'
import two from '../../../assets/banner/two.jpg'
import three from '../../../assets/banner/three.jpg'
import './AboutClient.css'



const AboutClient = () => {
    return (
        <div className="mx-40">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={three} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={two} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={one} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={three} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={two} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={one} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={three} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={two} className="w-full" /></SwiperSlide>
                <SwiperSlide><img src={one} className="w-full" /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default AboutClient;