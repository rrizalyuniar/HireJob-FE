import React, { useRef, useState } from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Home.module.css";
import { Navigation, Pagination } from "swiper";
import img from '../../public/image/avatar.png'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section4 = () => {
    return (
        <div className='container'>
            <Swiper dir="rtl" slidesPerView={3} centeredSlides={true} spaceBetween={30} grabCursor={true} navigation={true} 
            pagination={{ clickable: true, }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper swiper-container"
            >
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className={styles.card}>
                                <div>
                                    <Image src={img} className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitle}>
                                    <h3>Harry Styles</h3>
                                    <span>Web Developer</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        <SwiperSlide className="swiper-slide">
                            <div className={styles.card}>
                                <div>
                                    <Image src={img} className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitle}>
                                    <h3>Niall Horan</h3>
                                    <span>Web Developer</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </div><div className="row">
                    <div className="col-10">
                        <SwiperSlide>
                            <div className={styles.card}>
                                <div>
                                    <Image src={img} className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitle}>
                                    <h3>Louis Tomlinson</h3>
                                    <span>Web Developer</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>


            </Swiper>
        </div>
    )
}

export default Section4