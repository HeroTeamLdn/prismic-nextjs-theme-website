import React from "react";

import { RichTextArea } from "./prismic";

const SliceSwitcher = ({ slices, blogpost }) => {
  return (
    <>
      {slices.map((slice, idx) => {
        switch (slice.slice_type) {
          case "heading":
            return <div>HEADING</div>;
          // return <Heading slice={slice} key={`slice_${idx}`} />;
          case "video":
            return <div>VIDEO</div>;
          // return <Video slice={slice} key={`slice_${idx}`} />;
          case "text":
            return <RichTextArea slice={slice} key={`slice_${idx}`} />;
          case "two_up_left":
            return <div>TWO_UP_LEFT</div>;
          // return <TwoUp slice={slice} key={`slice_${idx}`} />;
          case "two_up_right":
            return <div>TWO_UP_RIGHT</div>;
          // return <TwoUp slice={slice} key={`slice_${idx}`} right />;
          case "three_up":
            return <div>THREE_UP</div>;
          // return <ThreeUp slice={slice} key={`slice_${idx}`} />;
          case "divider":
            return <div>DIVIDER</div>;
          // return <Divider slice={slice} key={`slice_${idx}`} />;
          case "quick_links":
            return <div>QUICK_LINKS</div>;
          // return <QuickLinks slice={slice} key={`slice_${idx}`} />;
          case "quote":
            return <div>QUOTE</div>;
          // return <Quote slice={slice} key={`slice_${idx}`} />;
          default:
            break;
        }
      })}
    </>
  );
};

export default SliceSwitcher;
