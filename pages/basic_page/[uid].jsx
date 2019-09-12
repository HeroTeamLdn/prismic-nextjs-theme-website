import React, { useEffect } from "react";
import Router from "next/router";
import { getPrismicApi, RichTextField } from "../../utils/prismic";

import useGlobal from "../../store";

import AppContainer from "../../components/AppContainer";

// import "../blogPost.scss";

const BlogPost = ({ uid, data }) => {
  const [{ prismicData }, globalActions] = useGlobal();

  useEffect(() => {
    globalActions.setPrismicData(uid, data);
  }, [uid]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {prismicData[uid] && (
        <AppContainer prismicData={prismicData[uid]}>
          <div className="row">
            <div className="col-sm-12">
              <RichTextField text={prismicData[uid].post_title} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="pl-lg-5">
                <div className="spacing-md">
                  <RichTextField text={prismicData[uid].page_intro} />
                  <RichTextField text={prismicData[uid].page_content} />
                </div>
                <button className="btn-secondary" onClick={scrollToTop}>
                  Return to top
                </button>
              </div>
            </div>
          </div>
        </AppContainer>
      )}
    </>
  );
};

BlogPost.getInitialProps = async router => {
  let api = await getPrismicApi();
  let query = router.query;
  if (!query || !query.uid) {
    query = { uid: router.asPath.split("/basic_page/")[1] };
  }
  let data = await api.getByUID("basic_page", query.uid);

  return { ...data };
};

export default BlogPost;
