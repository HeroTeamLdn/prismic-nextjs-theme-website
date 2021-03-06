import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";

import Nav from "../components/Nav";
// import "../scss/_index.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  getChildContext() {
    return {};
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
        <Nav></Nav>

        {/* <PageTransition
            timeout={300}
            classNames="page-transition"
            monkeyPatchScrolling
          > */}
        <Component {...pageProps} key={router.route} />
        {/* </PageTransition> */}
        {/* <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style> */}
      </div>
    );
  }
}
