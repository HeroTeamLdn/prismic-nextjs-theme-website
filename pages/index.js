import React, { useEffect } from "react";
import { getPrismicApi } from "../utils/prismic";

import useGlobal from "../store";

// import AppContainer from "../components/AppContainer";
// import Hero from "../components/prismic/Hero";

// import { PrismicComponentSwitcher } from "../components/prismic";

const Index = ({ uid, data }) => {
  const [{ prismicData }, globalActions] = useGlobal();

  useEffect(() => {
    globalActions.setPrismicData(uid, data);
  }, []);

  return <>{prismicData[uid] && <>{console.log(prismicData)}</>}</>;
};

Index.getInitialProps = async ({ query }) => {
  let api = await getPrismicApi();
  let data = await api.getByUID("landing_page", "home-page");

  return { uid: "home", ...data };
};

export default Index;
