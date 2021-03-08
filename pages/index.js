import Head from "next/head";
import Link from "next/link";
import styled from 'styled-components';
import styles from "../styles/Home.module.css";
import Destinations from "../components/Destinations";
import Carousel from "../components/Carousel";
import Promotions from '../components/Promotions';
import TopNews from '../components/TopNews';
import HomeNews from '../components/HomeNews';

const HotelTypes = styled.div`
  ul {
    list-style: none;
    padding-inline-start: unset;
  }
  a {
    color: black;
    text-decoration: none;
    text-align: center;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    span {
      font-weight: bold;
    }
  }
  img {
    width: 100%;
    border-radius: 1rem;
  }
  span {
    font-size: calc(1vw + 0.8rem);
  }
  @media screen and (max-width: 599px) {
    .wrapper {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

    }
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yêu ViVu</title>
        <meta name="keywords" content="Yêu Vivu, đặt phòng khách sạn, chuyên voucher resort, voucher villa, voucer khách sạn" />
        <meta name="author" content="Yêu vivu || đặt phòng khách sạn, book phòng, săn voucher, voucher siêu giảm giá" />
      </Head>
      <section style={{ width: "80%", margin: 'auto' }}>
        {/* <div className={styles.carousel}>
        </div> */}
        {/* <Carousel /> */}
        <TopNews/>
        <HomeNews/>

      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <div
          className="destinations"
          style={{
            width: "80%",
          }}
        >
        </div>
      </div>
    </div>
  );
}
