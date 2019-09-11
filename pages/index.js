import React, { useEffect } from "react";
import { RichTextField, getPrismicApi } from "../utils/prismic";

import useGlobal from "../store";

import AppContainer from "../components/AppContainer";
import SliceSwitcher from "../components/SliceSwitcher";

const Index = ({ uid, data }) => {
  const [{ prismicData }, globalActions] = useGlobal();

  useEffect(() => {
    globalActions.setPrismicData(uid, data);
  }, []);

  return (
    <>
      {prismicData[uid] && (
        <AppContainer>
          <RichTextField text={prismicData[uid].page_title}></RichTextField>
          <SliceSwitcher slices={prismicData[uid].body}></SliceSwitcher>
        </AppContainer>
      )}
    </>
  );
};

Index.getInitialProps = async ({ query }) => {
  let api = await getPrismicApi();
  let data = await api.getByUID("landing_page", "home-page");

  return { uid: "home", ...data };
};

export default Index;
