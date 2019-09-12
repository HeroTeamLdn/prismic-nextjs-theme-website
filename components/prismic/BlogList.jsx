import React from "react";

import { BlogListItem } from ".";

const BlogList = ({ blogPosts }) => {
  const oddPosts = blogPosts.filter((post, index) => {
    return (index % 2 === 0);
  });
  const evenPosts = blogPosts.filter((post, index) => {
    return (index % 2 !== 0);
  });

  const onePosts = blogPosts.filter((post, index) => {
    return (index % 3 === 0);
  });
  const twoPosts = blogPosts.filter((post, index) => {
    return (index % 3 === 1);
  });
  const threePosts = blogPosts.filter((post, index) => {
    return (index % 3 === 2);
  });

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-10 offset-lg-1">
        <div className="d-block d-xxl-none">
          <div className="row">
            <div className="col-md-6">
              {oddPosts.map(post => {
                return (
                  <BlogListItem
                    key={`post_${post.id}`}
                    blogpost={post}
                  ></BlogListItem>
                );
              })}
            </div>
            <div className="col-md-6">
              {evenPosts.map(post => {
                return (
                  <BlogListItem
                    key={`post_${post.id}`}
                    blogpost={post}
                  ></BlogListItem>
                );
              })}
            </div>
          </div>
        </div>

        <div className="d-none d-xxl-block">
          <div className="row">
            <div className="col-xl-4">
              {onePosts.map(post => {
                return (
                  <BlogListItem
                    key={`post_${post.id}`}
                    blogpost={post}
                  ></BlogListItem>
                );
              })}
            </div>
            <div className="col-xl-4">
              {twoPosts.map(post => {
                return (
                  <BlogListItem
                    key={`post_${post.id}`}
                    blogpost={post}
                  ></BlogListItem>
                );
              })}
            </div>
            <div className="col-xl-4">
              {threePosts.map(post => {
                return (
                  <BlogListItem
                    key={`post_${post.id}`}
                    blogpost={post}
                  ></BlogListItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
