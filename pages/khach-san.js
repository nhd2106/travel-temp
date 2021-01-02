import { NextSeo } from 'next-seo';
import { Container } from "@material-ui/core";
import { LienHeStyles } from "./styles";

export default function LienHe(props) {
  const SEO = {
    title: 'Khách sạn'
  }
  return (
    <>
      <NextSeo {...SEO}/>
      <LienHeStyles></LienHeStyles>
    </>
  );
}
