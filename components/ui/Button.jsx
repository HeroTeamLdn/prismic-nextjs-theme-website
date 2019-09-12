import React from "react";
import Link from "next/link";
import linkResolver from "../../utils/prismic.linkResolver";
import { Link as PrisLink, RichText } from "prismic-reactjs";

const Button = ({ link, label }) => {
  const content = <a className="btn">{RichText.asText(label)}</a>;

  const url = PrisLink.url(link, linkResolver);

  if (url.indexOf("/page") == 0) {
    return (
      <Link href="/page/[uid]" as={url}>
        {content}
      </Link>
    );
  } else {
    return <Link href={url}>{content}</Link>;
  }
};

export default Button;
