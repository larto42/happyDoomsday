import React from "react"
import styled from "styled-components"
import Slider from "infinite-react-carousel"

const Gallery = styled.div`
  grid-column: 1/-1;
  width: 85vw;

  & .carousel-dots li {
    margin: 0 2px;
  }

  & .carousel-dots li button::before {
    color: white;
    opacity: 1;
  }

  & .carousel-dots li.carousel-dots-active button::before {
    color: #ff00ff;
  }

  & .carousel-next::before,
  & .carousel-prev::before {
    filter: grayscale(1) brightness(10);
  }
`

export default ({ images = [] }) => {
  const ImageWrapper = styled.div`
    height: 38vh;
    .carousel-item.active & {
      transform: scale(1.3);
    }
  `

  const Image = styled.img`
    max-width: 100%;
    min-height: 100%;
    object-fit: contain;
  `

  return (
    <Gallery>
      <Slider dots slidesToShow={3} centerMode shift={95}>
        {images.map((img, index) => (
          <ImageWrapper key={index}>
            <Image src={img} alt="" />
          </ImageWrapper>
        ))}
      </Slider>
    </Gallery>
  )
}
