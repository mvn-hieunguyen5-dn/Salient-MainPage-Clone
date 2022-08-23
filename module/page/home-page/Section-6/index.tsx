import React from "react";

import Line1 from "./Line1";
import Line2 from "./Line2";
import Line3 from "./Line3";
import Line4 from "./Line4";

export default function index() {
  return (
    <section className="section-banner">
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />

      <div className="banner-line line-4"></div>
      <div className="banner-line line-5"></div>
    </section>
  );
}
