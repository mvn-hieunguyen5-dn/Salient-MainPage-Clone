import React, { useState } from "react";
import VideoL2B1 from "./Line2Banner1Video";
import SVGL2B2 from "./Line2Banner2SVG";
import { InView } from "react-intersection-observer";

export default function Index() {
  const [issView, setView] = useState(false);
  return (
    <div className="banner-line line-2">
      <div className="banner banner-1">
        <h4>Responsive Editing</h4>
        <p className="description ">
          Maximize your control and create intricate responsive layouts with the
          ability to control settings uniquely per each device viewport.
        </p>
        <div className="img">
          <VideoL2B1 />
        </div>
      </div>
      <div className="banner banner-2">
        <p className="new">New</p>
        <h4>Global Sections</h4>
        <p className="description ">
          The easy way to manage a section that you place on multiple pages of
          your site. Edits made in one location will instantly reflect in all
          instances where the section is used.
        </p>
        <InView
          as="div"
          triggerOnce
          onChange={(inView, entry) => setView(inView)}
        ></InView>
        <div className={`img ${issView && "animated"}`}>
          <SVGL2B2 />
        </div>
      </div>
    </div>
  );
}
