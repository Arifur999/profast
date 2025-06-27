import React, { useEffect, useState } from 'react';
import customar from '../../assets/customer-top.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-[#f3f6f5] py-16 font-urbanist text-center relative">
      {/* Header */}
      <div className="mb-6">
        <img src={customar} alt="Header" className="mx-auto mb-4 w-40" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00332c]">
          What our customers are saying
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full md:w-[1100px] mx-auto overflow-visible"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md min-h-[300px] relative"
            >
              <span className="text-4xl text-gray-300 absolute top-6 left-6">“</span>
              <p className="text-gray-600 mt-10">{item.review}</p>
              <div className="border-t border-dashed border-gray-400 my-6"></div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={item.user_photoURL}
                  alt={item.userName}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="text-[#00332c] font-bold">{item.userName}</p>
                  <p className="text-sm text-gray-500">{item.designation}</p>
                </div>
                
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        {/* <div className="mt-10 flex justify-center items-center gap-4">
          <button className="swiper-button-prev w-9 h-9   text-[#00332c] hover:bg-gray-200 flex items-center justify-center">
            <FaChevronLeft />
          </button>
          <button className="swiper-button-next w-9 h-9   text-white flex items-center justify-center hover:bg-lime-500 transition">
            <FaChevronRight />
          </button>
        </div> */}
      </Swiper>

      {/* Pagination & Slide Effects */}
      <style>
        {`
          .swiper-slide {
            opacity: 0.4;
            transform: scale(0.9);
            transition: all 0.4s ease;
            filter: blur(2px);
          }
          .swiper-slide-active {
            opacity: 1 !important;
            transform: scale(1.05);
            filter: none !important;
          }
          .swiper-slide-prev,
          .swiper-slide-next {
            opacity: 0.4 ;
            filter: ;
          }
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 1;
            margin: 0 4px;
          }
          .swiper-pagination-bullet-active {
            background: #a3e635;
          }
        `}
      </style>
      
    </div>
  );
};

export default Testimonials;
