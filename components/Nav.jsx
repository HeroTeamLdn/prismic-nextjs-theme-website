import React, { useEffect } from "react";
import Link from "next/link";

import useGlobal from "../store";

import "./nav.scss";

const Nav = () => {
  return (
    <nav className="topnav">
      <Link href="/">
        <img className="topnav-logo" src="/static/logo.svg" />
      </Link>
      <ul>
        <li>
          <Link href="/blog" prefetch>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
