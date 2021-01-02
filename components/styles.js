import styled from "styled-components";

export const NavigationsStyled = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  color: white;
  .top-header {
    background-color: #ffa900;
    .top-brand {
      cursor: pointer;
    }
  }
  .brand {
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
  }
  .active {
    color: yellow;
    text-decoration: none !important;
  }
  a {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    &:hover {
      text-decoration: none;
      color: yellow;
    }
  }
  .MuiDrawer-paper {
    background-color: "#393A44";
  }
`;

export const DestinationsStyled = styled.div`
  margin-bottom: 1.5rem;
  .destination {
    display: flex;
    text-decoration: none;
    color: black;
    jutify-content: center;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
    }
    margin-bottom: 10px;
  }
  // .slick-slide {
    
  // }
  @media screen and (max-width: 599px) {
    img {
      width: 100%;
    }
    .slick-slide {
      span: nth-child(1) {

      }
    }
    .slick-next {
      right: -30px !important;
      opacity: 1;
    }
    .slick-prev {
      left: -30px !important;
      opacity: 1;
    }
    .slick-next::before {
      opacity: 0.75 !important;
    }
  }
`;

export const FooterStyles = styled.div`
  background: #1ba0e2;
  // height: 45vh;
  color: white;
  .footer {
    width: 80%;
    margin: auto;
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #3face2;
    .right {
      display: flex;
      flex: 3 1 40rem;
      flex-wrap: wrap;
      justify-content: space-between;
      .helps {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a {
          margin-top: 1rem;
        }
      }
    }
    .left {
      flex: 1 1 40rem;
      span {
        color: #bae2f6;
        margin-top: 1rem;
      }
      .social {
        width: 30%;
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
        li {
          margin-right: 1rem;
        }
      }
    }
  }
  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;

export const SignInStyles = styled.div`
  display: flex !important;
  justify-content: center !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .form-wraper {
    width: 100%;
    max-width: 450px;
  }
  .top-sign-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .MuiFormControl-root {
      width: 100%;
    }
  }
`;
