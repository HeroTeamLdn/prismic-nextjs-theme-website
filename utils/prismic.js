import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import linkResolver from "../utils/prismic.linkResolver";

import { PRISMIC_API_ENDPOINT, PRISMIC_API_TOKEN } from "../config.local.js";

export const getPrismicApi = async () => {
  let api = await Prismic.getApi(PRISMIC_API_ENDPOINT, {
    accessToken: PRISMIC_API_TOKEN
  });
  return api;
};

export const RichTextField = ({ text, component }) => (
  <>
    <div className="richtext">{RichText.render(text, linkResolver)}</div>
  </>
);

export const asText = RichText.asText;
