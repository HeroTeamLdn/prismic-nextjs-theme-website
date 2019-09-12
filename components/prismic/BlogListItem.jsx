import React from "react";
import { RichText } from "prismic-reactjs";
import TextTruncate from "react-text-truncate";
import Link from "next/link";
import moment from "moment";

import { Image } from "../ui";
import "./blogListItem.scss";

const BlogListItem = ({ blogpost }) => (
  <div className="p-3 blog-list-item spacing-sm">
    <div className="blog-list-item-img">
      {blogpost.data.post_image &&
        blogpost.data.post_image.square &&
        blogpost.data.post_image.square.dimensions && (
          <Image
            mobileImage={blogpost.data.post_image.square}
            tabletImage={blogpost.data.post_image.square}
            desktopImage={blogpost.data.post_image.square}
            className="featured-blog-post-img"
          />
        )}
    </div>
    <div className="bloglistHeading">
      {RichText.asText(blogpost.data.post_title)}
    </div>
    <div className="blogpost-topbar">
      <div className="left">
        <span className="featured-blogpost-type">
          {blogpost.data.post_type}
        </span>{" "}
        ,{" "}
        <span>{moment(blogpost.data.date_of_post).format("Do MMMM YYYY")}</span>
      </div>
    </div>
    <div className="paragraph spacing-md">
      <TextTruncate
        line={3}
        element="span"
        truncateText="…"
        text={blogpost.data.body[0].primary.text[0].text}
      />
    </div>
    <Link href="/blog/[uid]" as={`/blog/${blogpost.uid}`} prefetch>
      <a className="btn-secondary spacing-sm">CONTINUE</a>
    </Link>
  </div>
);

export default BlogListItem;
