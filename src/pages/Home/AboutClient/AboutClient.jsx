
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import one from '../../../assets/client/download.jpg'
import two from '../../../assets/client/images (1).jpg'
import three from '../../../assets/client/latest-ser-1.jpg'
import four from '../../../assets/client/latest-ser-3.jpg'
import './AboutClient.css'


const AboutClient = () => {

    // const renderCustomBullet = (index, className) => {
    //     return `<strong class="${className}">${index === 0 ? '<' : '>'}</strong>`;
    // };
    return (
        <div className="lg:mx-40 mx-5 mt-10">
            <div className="lg:mx-auto text-center mx-5 mb-10">
                <h1 className="lg:text-3xl text-2xl font-bold">Client says about us</h1>
                <p className="text-gray-400 mt-2">OUR HAPPY CLIENTS</p>
            </div>
            <Swiper
                breakpoints={{
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 }
                }}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    // renderBullet: renderCustomBullet,
                    // bulletClass: 'custom-bullet',
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div>
                    <p className="text-sm">car carry help us for our car finance and we are very happy to work with this company.</p>
                    <div className="rating rating-sm lg:mt-5 mt-3">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <div className="avatar block lg:mt-5 mt-3">
                        <div className="w-20 rounded-full lg:ml-40 ml-48">
                            <img src={one} />
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <p className="text-sm">i always refer to my friends to join this company for earn and enjoy!</p>
                    <div className="rating rating-sm lg:mt-5 mt-3">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <div className="avatar block lg:mt-5 mt-3">
                        <div className="w-20 rounded-full lg:ml-40 ml-48">
                            <img src={two} />
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <p className="text-sm">Jessica is very outgoing and peaceful. I had such a great time on the full ride with here.</p>
                    <div className="rating rating-sm lg:mt-5 mt-3">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <div className="avatar block lg:mt-5 mt-3">
                        <div className="w-20 rounded-full lg:ml-40 ml-48">
                            <img src={three} />
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <p className="text-sm">It is  100% recommended!, especially when they are getting picked up.</p>
                    <div className="rating rating-sm lg:mt-5 mt-3">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <div className="avatar block lg:mt-5 mt-3">
                        <div className="w-20 rounded-full lg:ml-40 ml-48">
                            <img src={four} />
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AboutClient;