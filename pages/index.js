import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Destinations from "../components/Destinations";
import Carousel from "../components/Carousel";
import Promotions from '../components/Promotions';

import { HotelTypes } from "./styles";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lux Journey</title>
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
