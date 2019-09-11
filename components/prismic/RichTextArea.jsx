import React from "react";

import { RichText } from "prismic-reactjs";
import linkResolver from "../../utils/prismic.linkResolver";

import "./richTextArea.scss";

const PrismicComponentSwitcher = ({ slice, blogpost }) => {
  const className = blogpost
    ? "col-sm-12"
    : "col-sm-12 col-lg-8 offset-lg-1 col-lg-8 offset-lg-1";
  return (
    <div className="row rich-text-area">
      {/*desktop*/}
      <div className={className}>
        <div className="rte">
          {RichText.render(slice.primary.text, linkResolver)}
        </div>
      </div>
    </div>
  );
};

export default PrismicComponentSwitcher;
