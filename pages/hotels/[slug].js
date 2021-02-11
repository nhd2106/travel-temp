import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import { Breadcrumbs } from '../../components/';
import {
  HotelStyles,
  imageStyles
} from '../../styles';

import { handlerGetProductDetails } from "../../redux/actions/products";
import { BACKEND } from '../../libs/config';



const hotel = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const productDetails = useSelector(({ products }) => products.productDetails);
  useEffect(() => {
    dispatch(handlerGetProductDetails(slug));
  }, [slug]);

  const title = productDetails ? productDetails.title : '';
  const slugNTitle = [
    { slug: '/hotels', title: "khách sạn" },
    { slug:`/${slug}`, title },
  ]
  const SEO = {
    title,
  };
  const renderDetails = useCallback(() =>{
    if(productDetails && Object.keys(productDetails).length) {
      const {
        title,
        details,
        og_image,
        detail_images,
        price,
      } = productDetails;
      const baseUrl = BACKEND();
      console.log(baseUrl)
      const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`${baseUrl}${detail_images[i].url}`} width='100%'/>
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true
      }
      return(
        <div>
          <h2>{title}</h2>
          {detail_images ? <Slider {...settings}>
              {
                detail_images.map(({ url }, index) => (
                  <imageStyles key={index} >
                    <img src={`${baseUrl}${url}`}
                      width='100%'
                    />
                  </imageStyles>
                ))
              }
          </Slider> : null}
        </div>
      )
    }
    return null;
  }, [productDetails])
  return (
    <div style={{
      marginBottom: "1rem",
      marginBottom: "5rem",
    }}>
      <HotelStyles>
      <NextSeo {...SEO} />
      <Breadcrumbs
        slugNTitle={slugNTitle}
      />
      {renderDetails()}
    </HotelStyles>
    </div>
  );
};

export default hotel;
