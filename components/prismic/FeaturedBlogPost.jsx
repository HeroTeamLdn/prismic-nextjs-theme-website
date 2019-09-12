import React from "react";
import { RichTextField } from "../../utils/prismic";
import TextTruncate from "react-text-truncate";
import Link from "next/link";
import moment from "moment";

import { Image } from "../ui";
import "./featuredBlogPost.scss";

const FeaturedBlogPost = ({ blogpost }) => {
  return (
    <div className="row">
      <div className="col-sm-10 offset-sm-1">
        <div className="row featured-blogpost">
          <div className="col-sm-6 spacing-md">
            {blogpost.data.post_image &&
              blogpost.data.post_image.square &&
              blogpost.data.post_image.square.dimensions && (
                <Image
                  mobileImage={blogpost.data.post_image.square}
                  tabletImage={blogpost.data.post_image.square}
                  desktopImage={blogpost.data.post_image.square}
                  className="featured-blogpost-img"
                />
              )}
          </div>
          <div className="col-sm-6">
            <div className="blogpost-topbar">
              <div className="left featured-blogpost-info">
                <span className="featured-blogpost-type">
                  {blogpost.data.post_type}
                </span>{" "}
                ,{" "}
                <span>
                  <span>
                    {moment(blogpost.data.date_of_post).format("Do MMMM YYYY")}
                  </span>
                </span>
              </div>
              <div className="right featured">Featured</div>
            </div>
            <RichTextField text={blogpost.data.post_title}></RichTextField>
            <div className="paragraph spacing-md">
              <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={blogpost.data.body[0].primary.text[0].text}
              />
            </div>
            <Link href="/blog/[uid]" as={`/blog/${blogpost.uid}`} prefetch>
              <a className="btn-secondary">CONTINUE</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;
