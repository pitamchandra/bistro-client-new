
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.jpg'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.jpg'
import img6 from '../../../assets/home/06.jpg'

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-screen">
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                </SwiperSlide>
            </Swiper>
            </section>
        </>
    );
};

export default Home;


