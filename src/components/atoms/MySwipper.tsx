type Props = {
  readonly children: ReadonlyArray<Object>
  readonly prevRef: any
  readonly nextRef: any
  readonly activeIndexChange: any
  readonly swiperReachStart: any
  readonly swiperReachEnd: any
}

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import React, { ForwardRefRenderFunction, useEffect, useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const MyComponentRenderFn: ForwardRefRenderFunction<any, Props> = (
  {
    children,
    prevRef,
    nextRef,
    activeIndexChange,
    swiperReachStart,
    swiperReachEnd,
  },
  ref,
) => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const swiper = document.querySelector('.swiper')?.swiper
    setActiveIndex(swiper.activeIndex)
  }, [])

  useEffect(() => {
    if (activeIndex === 0) swiperReachStart(1)
    const swiper = document.querySelector('.swiper')?.swiper
    if (swiper.isEnd) swiperReachEnd(1)
    else swiperReachEnd(0)
    if (swiper.isBeginning) swiperReachStart(1)
    else swiperReachStart(0)
  }, [activeIndex])

  const nextSlide = () => {
    const swiper = document.querySelector('.swiper')?.swiper
    swiper.slideNext()
  }
  const prevSlide = () => {
    const swiper = document.querySelector('.swiper')?.swiper
    swiper.slidePrev()
  }

  return (
    <Swiper
      className="flex w-full -mt-[20px] md:mt-0 min-h-[580px] md:h-screen justify-center items-center"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      breakpoints={{
        640: {
          slidesPerView: Math.min(children.length, 2),
          spaceBetween: 5,
        },
        960: {
          slidesPerView: Math.min(children.length, 3),
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: Math.min(children.length, 4),
          spaceBetween: 5,
        },
      }}
      // slidesPerView={4}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={(e) => setActiveIndex(e.activeIndex)}
      onReachBeginning={swiperReachStart}
      onReachEnd={swiperReachEnd}
    >
      {children
        ? children.map((slideContent, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="flex px-5 justify-center">{slideContent}</div>
            </SwiperSlide>
          ))
        : null}{' '}
      <div data-toggle="prev" ref={prevRef} onClick={(e) => prevSlide()}></div>
      <div data-toggle="next" ref={nextRef} onClick={(e) => nextSlide()}></div>
    </Swiper>
  )
}

export const MySwipper = React.forwardRef(MyComponentRenderFn)
