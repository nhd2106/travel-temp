import Slider from "react-slick";
import styled from 'styled-components';
import PriceCards from "../PriceCard";


const PromotionStyle = styled.div`
  margin-bottom: 3rem;
`

const Promotions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <PromotionStyle>
      <div>
        <h1>Ưu đãi hấp dẫn</h1>
      </div>
      <div>
          <Slider {...settings}>
            <PriceCards/>
            <PriceCards/>
            <PriceCards/>
            <PriceCards/>
            <PriceCards/> 
          </Slider>
      </div>
    </PromotionStyle>
  );
};

export default Promotions;
