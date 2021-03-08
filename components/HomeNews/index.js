import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styled from "styled-components";
import faker from "faker/locale/en";
import _ from "lodash";
import { Grid, Hidden } from "@material-ui/core";

const Homenews = styled.div`

  margin-top: 1rem;
  .homenews_title {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0;
  }
  .homenews_title:before {
    content: "";
    display: inline-flex;
    background-color: #f4ae15;
    border-left-width: 15px;
    width: 7px;
    height: 25px;
    transform: skew(-20deg);
    margin-right: 1rem;
  }
  .homenews_title:after {
    content: "";
    display: table;
    clear: both;
  }
  .news_item {
    @media (max-width: 600px) {
      height: 210px;
    }
    .item_image {
      margin-right: 1rem;
    }
    padding-bottom: 1rem;
    margin: 1rem 0;
    border-bottom: 1px solid #eee;
    img {
      border-radius: 4px;
    }
  }
  .isfloating {
    position: fixed;
    top: 15%;
    bottom: 10%
  }
  .item_desc {
    overflow: hidden;
    text-overflow: ellipsis;
  }
 
`;

const HomeNews = (props) => {
  const samples = {};
  [...Array(19).keys()].forEach(() => {
    samples[faker.random.uuid()] = {
      title: faker.lorem.sentence(),
      image: faker.image.animals(),
      sentences: faker.lorem.sentences(),
    };
  });
  const [is_floating, setIs_floating] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 1500) {
      setIs_floating(true);
    } else {
      setIs_floating(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);
  return (
    <Homenews>
      <Grid container spacing={2}>
        <Grid item sm={9} xs={12}>
          <div className="homenews_title">
            <h3>Tin dành cho bạn</h3>
          </div>
          <div className="news_list">
            {_.map(samples, ({ image, title, sentences }, id) => (
              <Link href="/">
                <a>
                <div className="news_item " key={id}>
                <h3>{title}</h3>
                <Grid container spacing={2}>
                  <Grid  item xs={4} sm={3}>
                    <img width="100%" src={image} alt=""  height="auto" />
                  </Grid>
                  <Grid item xs={8} sm={9}>
                    <span>thời gian đăng | #nhãn</span>
                    <p className="item_desc">{sentences}</p>
                  </Grid>
                </Grid>
              </div>
                </a>
              </Link>
            ))}
          </div>
        </Grid>
        <Hidden smDown>
        <Grid item sm={3} xs={12}>
          <div>
            <div
              className="right_topBanner"
              style={{
                backgroundColor: "#FBE0B3",
                width: 300,
                height: 600,
                marginBottom: '3rem'
              }}
            >
              <h3>banner for ads</h3>
            </div>
            <div
              className={`right_topBanner ${is_floating ? 'isfloating' : ''}`}
              style={{
                backgroundColor: "#DEFBFF",
                width: 300,
                height: 600,
              }}
            >
              <h3>banner for ads</h3>
            </div>
          </div>
        </Grid>
        </Hidden>
      </Grid>
    </Homenews>
  );
};

export default HomeNews;
