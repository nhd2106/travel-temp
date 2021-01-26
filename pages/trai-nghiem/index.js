import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "../../components/Card";
import styled from 'styled-components';

import Slider from "react-slick";
import { NextSeo } from "next-seo";

import { handlerGetPosts } from "../../redux/actions/blog";

export const TraiNghiemStyles = styled.div`
  min-height: 76vh;
  width: 90%;
  margin: 3rem auto;
  .top-images {
    height: 100%;
    width: 100%;
    min-height: 76vh;
    display: flex;
    alig-items: center;
    .text {
      flex: 1 1 40rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .image {
      flex: 4 1 100rem;
      // background: url("/trainghiemimages.jpg");
      // width: 100%;
      // height: 100%;
      // background-position: center;
      // background-size: cover;
      // background-repeat: no-repeat;
      // min-height: 76vh;
      svg {
        width: 100%;
      }
    }
    margin-bottom: 7rem;
  }
  .card-wrapper {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .MuiTypography-h5,
  .MuiTypography-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .MuiCardHeader-content {
    overflow: hidden;
  }
  @media screen and (max-width: 599px) {
    margin: 3rem auto;
    .card-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
    .top-images {
      flex-direction: column;
      min-height: 50vh;
      margin-bottom: 3rem;

      .text,
      .image {
        flex: unset;
      }
      svg {
        height: 15rem;
      }
    }
  }
  @media screen and (min-width: 600px, max-width: 1024px) {
    .card-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function TraiNghiem(props) {
  const posts = useSelector(({ blog }) => blog.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlerGetPosts());
  }, []);
  const SEO = {
    title: "Trải nghiệm",
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <NextSeo {...SEO} />
      <TraiNghiemStyles>
        <div className="top-images">
          <div className="text">
            <h1>Lux Journey Trải nghiệm</h1>
            <p>Bọn mình đến đến, bọn mình trải nghiệm, bọn mình chia sẻ ^^.</p>
          </div>
          <div className="image">
            <svg
              id="a258fe46-239e-41b2-ae9b-c22059e5ba3c"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="743.35143"
              height="590.0931"
              viewBox="0 0 743.35143 590.0931"
            >
              <title>travel_mode</title>
              <path
                d="M888.22314,706.63487l74.0679-110.1464-73.91642,121.996.15457,12.39423q-8.11087.06186-16.06418-.27012l3.6736-159.31973-.10064-1.22909.13555-.23748.35161-15.05475L795.412,437.00079l81.01739,106.49915.2875,3.1821,2.77475-120.37228L809.43182,304.2126,879.6912,405.16382l-.73335-249.38034.00156-.83.02384.8163L883.634,352.315l63.85119-79.8368L883.843,369.247l1.39359,107.6702,58.75622-105.082L885.45256,492.74653l.77575,59.87006,85.44741-146.378L886.48808,573.5027Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#d0cde1"
              />
              <ellipse
                cx="376.58697"
                cy="574.0931"
                rx="314"
                ry="16"
                fill="#d0cde1"
              />
              <circle
                cx="560.05571"
                cy="575.77345"
                r="9.50475"
                fill="#3f3d56"
              />
              <path
                d="M789.6761,533.28741l-25.058-66.53322s3.88831-12.529-6.4805-11.66492-38.019,10.36882-38.019,10.36882-9.50474.86406,3.45627,14.25711l22.46577,70.42153,7.34457-3.45627L729.19135,476.691s-1.2961-4.75238,3.45628-6.04848,22.89779-9.07271,24.62593-4.32034,24.1939,73.01373,24.1939,73.01373Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#3f3d56"
              />
              <path
                d="M722.27881,579.083l48.3878,144.73136A52.01838,52.01838,0,0,0,783.295,729.919a66.21863,66.21863,0,0,0,12.42962,2.96807,15.02728,15.02728,0,0,0,4.69621-.37155c24.88084-4.96839,110.22481-50.60845,110.22481-50.60845s-43.63542-136.09068-50.98-152.508-23.76186-10.36881-23.76186-10.36881-82.92891,22.3923-94.83144,26.55279q-.36941.12957-.648.23331a26.94246,26.94246,0,0,0-12.9567,9.93246l-.00432.00432C715.36627,563.09775,722.27881,579.083,722.27881,579.083Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#6c63ff"
              />
              <path
                d="M757.01282,540.34l.23374.832c3.74443-1.04887,6.93532,7.30449,6.967,7.38845L817.352,695.87855l.81259-.2928L811.42673,676.906l72.37385-31.96713L889.5,661.31162l.816-.28436L842.77619,524.45814l-.02616-.04135c-.16876-.26749-4.17647-6.53114-8.9318-5.27l.22108.83537c3.97227-1.0573,7.6146,4.33764,7.95382,4.85574L852.0555,553.7442l-76.08274,24.87069-10.94833-30.3527C764.8814,547.88163,761.52048,539.07725,757.01282,540.34Zm95.32671,14.2201,7.41224,21.29333L784.8505,603.22722,776.266,579.42781ZM793.694,627.7444l-8.55021-23.70427,74.89217-27.37039,7.359,21.14023Zm73.98541-29.11724,8.06746,23.17551-73.576,29.44254L793.98742,628.558Zm-56.54666,77.46369-8.66852-24.03225,73.567-29.4389,7.48426,21.50012Z"
                transform="translate(-228.32428 -154.95345)"
                opacity="0.2"
              />
              <path
                d="M727.46322,573.89859c4.32034,6.91255,52.70813,151.6439,52.70813,151.6439a27.65579,27.65579,0,0,0,3.1236,4.37651,66.21863,66.21863,0,0,0,12.42962,2.96807,15.02728,15.02728,0,0,0,4.69621-.37155c-2.97239-1.07148-9.61275-4.54068-12.90485-14.74964-4.32034-13.39305-51.84407-154.66813-51.84407-154.66813s1.48617-10.654,5.40043-17.51467q-.36941.12957-.648.23331a26.94246,26.94246,0,0,0-12.9567,9.93246l-.00432.00432S723.14288,566.98605,727.46322,573.89859Z"
                transform="translate(-228.32428 -154.95345)"
                opacity="0.2"
              />
              <path
                d="M736.1039,605.8691l4.75237,14.68915S736.968,649.50453,757.27356,668.514l4.32034,14.68915-4.46431.121-4.7149-14.10259s-15.66243-18.89254-15.77059-47.171l-3.99647-16.1815Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#3f3d56"
              />
              <circle cx="589.218" cy="575.98946" r="9.50475" fill="#3f3d56" />
              <circle
                cx="681.45724"
                cy="536.02633"
                r="9.50475"
                fill="#3f3d56"
              />
              <path
                d="M568.41126,286.54655s-22,4-23,13a105.38739,105.38739,0,0,0,0,19Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#575a89"
              />
              <path
                d="M694.41126,496.54655s-64,23-106,3-93-45-93-45-25,2-22-13,23-102,69-131c0,0,28-36,44-34s78,150,78,150Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#575a89"
              />
              <path
                d="M694.41126,496.54655s-64,23-106,3-93-45-93-45-25,2-22-13,23-102,69-131c0,0,28-36,44-34s78,150,78,150Z"
                transform="translate(-228.32428 -154.95345)"
                opacity="0.2"
              />
              <path
                d="M728.41126,442.54655l4,10s26,16,15,27-27.55789-18.5-27.55789-18.5l-6.44211-12.5Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#a0616a"
              />
              <polygon
                points="281.087 466.593 277.087 535.593 298.087 544.593 306.087 461.593 281.087 466.593"
                fill="#a0616a"
              />
              <polygon
                points="366.087 466.593 394.087 502.593 402.087 526.593 422.087 525.593 427.087 501.593 399.087 473.593 366.087 466.593"
                fill="#a0616a"
              />
              <circle cx="363.58697" cy="86.0931" r="27" fill="#a0616a" />
              <path
                d="M586.41126,261.54655l2,25,32-10s-12-19-9-24Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#a0616a"
              />
              <path
                d="M586.41126,276.54655s18.9463,5,29.97315-7l23.02685,11-30,112-63-17,10-22s-13-15,1-29c0,0,3-28,12-34A128.68928,128.68928,0,0,0,586.41126,276.54655Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#d0cde1"
              />
              <path
                d="M615.91126,269.04655s-34,27,3,107,68,148,80,144,53-35,39-46-73-46-81-92,11-93,11-93Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#575a89"
              />
              <polygon
                points="425.087 144.593 511.087 289.593 487.087 299.593 413.087 199.593 425.087 144.593"
                fill="#575a89"
              />
              <path
                d="M551.41126,372.54655h-7l-26,56s-49,148-44,178,191.00366,25.96271,181,25c-9.51776-.916-59.03433-228.94687-44.5-241.5Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#2f2e41"
              />
              <path
                d="M512.41126,682.54655s-2-8-10-8-8,11-8,11l-23,21s-20,25,6,25,26-6,26-6,7-7,13-3,20-4,18-8-4.98774-29.8772-6.99387-25.4386S512.41126,682.54655,512.41126,682.54655Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#2f2e41"
              />
              <path
                d="M645.41126,670.54655s2-1-8,0-14,0-14,0l7,27s-6,46,14,42,20-32,20-32-3-25-1-27,1-29-2-29-17.47974-6.47974-17.47974-6.47974S653.41126,670.54655,645.41126,670.54655Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#2f2e41"
              />
              <path
                d="M592.73189,242.66286c-1.67994-2.58574-.831-6.10158-2.00909-8.95119-1.85-4.47477-7.5998-5.52305-12.42469-5.93132a37.03362,37.03362,0,0,0-9.62667.02576,9.23944,9.23944,0,0,0-6.6765,4.84072c-.71386,1.43163-.53372-3.05394-.07641-8.812a27.83336,27.83336,0,0,1,21.34582-24.9006q.10226-.024.20266-.04719c5.87444-1.35517,11.93161-2.35246,17.91916-1.649s11.95565,3.28808,15.69238,8.01908c1.70785,2.16228,2.91549,4.7121,4.822,6.70146,3.34964,3.49529,8.31543,4.76715,12.87689,6.389a38.85288,38.85288,0,0,1,14.11955,8.14611c3.94576,3.79583,6.74256,8.99732,6.82518,14.47185.09639,6.386-3.96586,12.97629-10.51157,14.23532a7.34878,7.34878,0,0,0-3.13888,1.35458c-6.25012,4.84611.87963,9.91914.83022,15.37477-.04124,4.55233-5.10907,7.51929-9.65664,7.73155A18.32259,18.32259,0,0,1,614.9962,265.164c-.68556-3.736-.15617-7.57306.28983-11.34511.51054-4.31784-8.788-14.48493-2.64565-7.03272a10.68754,10.68754,0,0,1,2.34835,4.94466c1.02231,5.95337-4.39531,7.95589-7.81171,11.25467a14.1561,14.1561,0,0,0-3.4267,14.57122,16.32046,16.32046,0,0,1-2.9662-20.60961c1.10053-1.6878,2.51845-3.15614,3.56207-4.8797,1.62847-2.68945,2.07756-8.53924-2.4805-8.3786C598.61229,243.80352,595.23272,246.51208,592.73189,242.66286Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#2f2e41"
              />
              <path
                d="M365.55935,716.78868s-40.1465-74.10249-137.23507-42.06014Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#d0cde1"
              />
              <path
                d="M367.98007,714.97784s-49.649-63.1088,22.01179-141.83793Z"
                transform="translate(-228.32428 -154.95345)"
                fill="#d0cde1"
              />
            </svg>
          </div>
        </div>
        <div></div>
        <h2>Phú Quốc nè</h2>

        {/* <div className="card-wrapper">
        {posts
          ? posts.map((post) => {
              const {
                og_img: { url },
                id,
                title,
                shortDesc,
              } = post || "";
              return (
                <MediaCard
                  image={`http://localhost:1337${url}`}
                  title={title}
                  description={shortDesc}
                  id={id}
                />
              );
            })
          : null}
      </div> */}
        <div style={{ marginBottom: "3rem" }}>
          {posts ? (
            <Slider {...settings}>
              {posts.map((post) => {
                const {
                  og_img,
                  id,
                  title,
                  shortDesc,
                } = post || "";
                const { url } = og_img || ''
                return (
                  <MediaCard
                    key={id}
                    image={`http://localhost:1337${url}`}
                    title={title}
                    description={shortDesc}
                    id={id}
                  />
                );
              })}
            </Slider>
          ) : null}
        </div>
        <h2>Đà Lạt</h2>
        <div style={{ marginBottom: "3rem" }}>
          {posts ? (
            <Slider {...settings}>
              {posts.map((post) => {
                const {
                  og_img,
                  id,
                  title,
                  shortDesc,
                } = post || "";
                const { url } = og_img || '';
                return (
                  <MediaCard
                    key={id}
                    image={`http://localhost:1337${url}`}
                    title={title}
                    description={shortDesc}
                    id={id}
                  />
                );
              })}
            </Slider>
          ) : null}
        </div>
        <h2>Nha Trang</h2>
        <div style={{ marginBottom: "3rem" }}>
          {posts ? (
            <Slider {...settings}>
              {posts.map((post) => {
                const {
                  og_img,
                  id,
                  title,
                  shortDesc,
                } = post || "";
                const { url } = og_img || '';
                return (
                  <MediaCard
                    image={`http://localhost:1337${url}`}
                    title={title}
                    description={shortDesc}
                    id={id}
                    key={id}
                  />
                );
              })}
            </Slider>
          ) : null}
        </div>
        <h2>Đà Lạt</h2>
        <div style={{ marginBottom: "3rem" }}>
          {posts ? (
            <Slider {...settings}>
              {posts.map((post) => {
                const {
                  og_img,
                  id,
                  title,
                  shortDesc,
                } = post || "";
                const { url } = og_img || '';
                return (
                  <MediaCard
                    key={id}
                    image={`http://localhost:1337${url}`}
                    title={title}
                    description={shortDesc}
                    id={id}
                  />
                );
              })}
            </Slider>
          ) : null}
        </div>
      </TraiNghiemStyles>
    </>
  );
}
