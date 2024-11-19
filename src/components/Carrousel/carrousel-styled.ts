import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .swiper-pagination-bullet {
    background: #fff; /* Cor neutra para os bullets */
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #b79d57;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #333; /* Cor neutra para os botões de navegação */
    opacity: 0.7;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  .swiper-button-disabled {
    opacity: 0.3; /* Aparência para botões desativados */
    pointer-events: none;
  }

  img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    object-fit: contain;
  }
`;
