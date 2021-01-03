import styled from "styled-components";

export default HotelTypes = styled.div`
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
export default TraiNghiemStyles = styled.div`
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

export default LienHeStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), transparent),
    url("/relaxing.jpg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .form-wrapper {
    min-height: 70vh;
    min-width: 60vw;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),
      0px 20px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    alin-items: center;
    .right,
    .left {
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .left {
      flex: 1 1 20rem;
    }
    .right {
      flex: 3 1 20rem;
    }
    svg {
      height: 15rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 599px) {
    .form-wrapper {
      min-height: 60vh;
      min-width: 95vw;
      background: rgba(255, 255, 255, 0.5);
    }
    .button-submit {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default BlogStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  iframe {
    width: 100%;
  }
`;
export default BlogCover = styled.div`
  .cover {
    background: url(${(props) => {
      return `${props.coverUrl}`;
    }});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    min-height: 70vh;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 599px) {
    .cover {
      min-height: 20vh;
    }
  }
`;
