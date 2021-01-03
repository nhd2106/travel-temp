import React, { useEffect, useMemo } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import { BlogStyles, BlogCover } from "../styles";

import { handlerGetPostDetails } from "../../redux/actions/blog";

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
