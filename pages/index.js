import Head from "next/head";
import Link from "next/link";
import styled from 'styled-components';
import styles from "../styles/Home.module.css";
import Destinations from "../components/Destinations";
import Carousel from "../components/Carousel";
import Promotions from '../components/Promotions';

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
      </Head>
      <section className="imageCover">
        {/* <div className={styles.carousel}>
        </div> */}
        <Carousel />
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
          <Destinations />
          <Promotions/>
          <HotelTypes>
            <h1>Luôn phù hợp</h1>
            <div>
              <ul className="wrapper">
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/home.jpg" />
                        <div>
                          <span>Nguyên nhà</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/stage.jpg" />
                        <div>
                          <span>Gác mái</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/uniqe.jpg" />
                        <div>
                          <span>Riêng biệt</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/petwelcome.jpg" />
                        <div>
                          <span>Được mang vật nuôi</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </HotelTypes>
        </div>
      </div>
    </div>
  );
}
