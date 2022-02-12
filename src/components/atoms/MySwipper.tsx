type Props = {
  readonly children: ReadonlyArray<Object>
}
type children = readonly Object[]

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export const MySwipper: React.FC<Props> = ({ children }) => (
  <Swiper
    className="flex w-full"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {children
      ? children.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="flex px-10 justify-center">{slideContent}</div>
          </SwiperSlide>
        ))
      : null}{' '}
  </Swiper>
)
