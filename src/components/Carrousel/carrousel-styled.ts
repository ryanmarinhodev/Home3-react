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
      margin-top: 20px;

      @media (max-width: 980px) {
        margin-top: 55px;
        width: 100%;
      }

      @media (max-height: 700px) {
        max-height: 70vh;
      }
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #b79d57;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    position: absolute;
    top: 50%;

    width: 30px;
    height: 30px;
    font-size: 14px !important;

    &:hover {
      opacity: 1;
    }

    &::after {
      font-size: 14px !important;
    }

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
      font-size: 12px !important;

      &::after {
        font-size: 12px !important;
        position: absolute;
        top: 40px;
      }
    }
  }

  .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: contain;
  }
`;
