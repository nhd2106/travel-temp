import React, { useEffect, useMemo } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import styled from 'styled-components';

import { handlerGetPostDetails } from "../../redux/actions/blog";

 const BlogStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  iframe {
    width: 100%;
  }
`;
 const BlogCover = styled.div`
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


export default function Post() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const postDetails = useSelector(({ blog }) => blog.postDetails);
  const { url } = postDetails && postDetails.og_img ? postDetails.og_img : "";
  useEffect(() => {
    dispatch(handlerGetPostDetails(id));
  }, [id]);
  const render = useMemo(() => {
    if (postDetails) return { __html: postDetails.content };
  }, [postDetails]);
  const coverUrl = url ? `http://localhost:1337${url}` : "";
  const SEO = {
    title: postDetails ? postDetails.title : '',
  };
  return (
    <>
      <NextSeo {...SEO}/>

      <BlogStyles>
        {coverUrl ? (
          <BlogCover coverUrl={coverUrl}>
            <div className="cover" />
          </BlogCover>
        ) : null}

        <div
          style={{
            width: "80%",
            margin: "auto",
          }}
          dangerouslySetInnerHTML={render}
        />
      </BlogStyles>
    </>
  );
}
