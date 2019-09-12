import React, { useEffect, useState } from "react";
import { Predicates } from "prismic-javascript";
import { getPrismicApi } from "../../utils/prismic";

import useGlobal from "../../store";

import AppContainer from "../../components/AppContainer";

import {
  FeaturedBlogPost,
  BlogList,
  BlogFilters
} from "../../components/prismic";

const getBlogPosts = async ({ sorting, postType, tag }) => {
  let api = await getPrismicApi();
  const allPostTypes = ["Article", "News", "Event"];

  let predicates = Predicates.any(
    "my.blog_post.post_type",
    postType === "All" ? allPostTypes : [postType]
  );

  if (tag !== "") {
    predicates = [
      Predicates.any(
        "my.blog_post.post_type",
        postType === "All" ? allPostTypes : [postType]
      ),
      Predicates.at("document.tags", [tag])
    ];
  }

  // console.log(predicates);

  let { results: entries } = await api.query(predicates, {
    orderings: `[my.blog_post.date_of_post ${sorting}]`
  });
  // console.log(entries);
  return entries;
};

const Blog = ({ uid, data, blogposts }) => {
  const [postTypeObj, setPostType] = useState("All");
  const [tagObj, setTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [{ prismicData }, globalActions] = useGlobal();

  useEffect(() => {
    globalActions.setPrismicData(uid, { ...data, blogposts });
  }, []);

  const onFilterChange = async ({ sorting, postType, tag }) => {
    setLoading(true);
    setPostType(postType);
    setTag(tag);
    const blogposts = await getBlogPosts({ sorting, postType, tag });
    setLoading(false);

    globalActions.setPrismicData(uid, { ...prismicData[uid], blogposts });
  };

  return (
    <>
      {prismicData[uid] && (
        <AppContainer prismicData={prismicData[uid]}>
          <BlogFilters onChange={onFilterChange}></BlogFilters>

          {!loading && (
            <div>
              {/* <> Featured Component */}
              {postTypeObj == "All" &&
                tagObj == "" &&
                prismicData[uid].featured_post.data && (
                  <FeaturedBlogPost
                    blogpost={prismicData[uid].featured_post}
                  ></FeaturedBlogPost>
                )}
              {/* <> Blog Post List */}
              <BlogList blogPosts={prismicData[uid].blogposts}></BlogList>
            </div>
          )}
        </AppContainer>
      )}
    </>
  );
};

Blog.getInitialProps = async ({ query }) => {
  let api = await getPrismicApi();
  let data = await api.getByUID("blog_landing_page", "blog", {
    fetchLinks: [
      // get associated linked featured blog post data
      "blog_post.body",
      "blog_post.post_title",
      "blog_post.date_of_post",
      "blog_post.post_type",
      "blog_post.post_image"
    ]
  });

  // get blog posts
  const blogposts = await getBlogPosts({
    sorting: "desc",
    postType: "All",
    tag: ""
  });

  return { ...data, blogposts };
};

export default Blog;
