import React, {
  useEffect,
  useCallback,
  useState,
  useMemo
 } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import ImageGallery from 'react-image-gallery';

import { Breadcrumbs } from '../../components/';
import {
  Paper,
  Tabs,
  Tab
} from '@material-ui/core';
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
  const [tabValue, setTabValue] = useState(0);
  const productDetails = useSelector(({ products }) => products.productDetails);
  useEffect(() => {
    dispatch(handlerGetProductDetails(slug));
  }, [slug]);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
      const imagesDetails = detail_images ? detail_images.map(({ url }) => {
        const imageTarget = url.split('/uploads/')[1];
        const thumbnail = `${baseUrl}/uploads/thumbnail_${imageTarget}`;
        console.log(thumbnail)
        return ({
          original: `${baseUrl}${url}`,
          thumbnail
        })
      })
     : null;
      return(
        <div>
          <h2>{title}</h2>
          <ImageGallery items={imagesDetails} />
          <Paper>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="mô tả"/>
              <Tab label="mô tả 2"/>
              <Tab label="mô tả 3"/>
              <Tab label="mô tả 4"/>
            </Tabs>
          </Paper>

        </div>
      )
    }
    return null;
  }, [productDetails, tabValue])
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
