import { SwiperSlide } from "swiper/react";
import { StyledSwiper } from "./carrousel-styled";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image1 from "../../../src/assets/carrossel/1.png";
import Image2 from "../../../src/assets/carrossel/2.png";
import Image3 from "../../../src/assets/carrossel/3.png";

const data = [
  { id: "1", image: Image1 },
  { id: "2", image: Image2 },
  { id: "3", image: Image3 },
];

const Carrousel: React.FC = () => {
  return (
    <div>
      <StyledSwiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </div>
  );
};

export default Carrousel;
