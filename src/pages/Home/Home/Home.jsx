import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slick1 from '../../../assets/slick-slider/slick-1.png'

const Home = () => {
    return (
        <div>
            <SectionHeading heading={'order online'} subHeading={'from 11.00 am to 10.00 pm'}></SectionHeading>
            <div className="container mx-auto">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="w-full relative" src={slick1} alt="" />
                        <span className="absolute bottom-4 left-1/2 uppercase text-2xl -translate-x-1/2">salad</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full relative" src={slick1} alt="" />
                        <span className="absolute bottom-4 left-1/2 uppercase text-2xl -translate-x-1/2">salad</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full relative" src={slick1} alt="" />
                        <span className="absolute bottom-4 left-1/2 uppercase text-2xl -translate-x-1/2">salad</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full relative" src={slick1} alt="" />
                        <span className="absolute bottom-4 left-1/2 uppercase text-2xl -translate-x-1/2">salad</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full relative" src={slick1} alt="" />
                        <span className="absolute bottom-4 left-1/2 uppercase text-2xl -translate-x-1/2">salad</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full relative" src={slick1} alt="" />
                        <span className="absolute bottom-4 left-1/2 uppercase text-2xl -translate-x-1/2">salad</span>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Home;