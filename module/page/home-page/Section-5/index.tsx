import React from "react";
import SponsorSlider from "./sponsorSlider";
import DynamicWord from "./dynamicWord";
export default function index() {
  return (
    <section className="section-trust-sponsor">
      <div className="container">
        <SponsorSlider />
      </div>{" "}
      <DynamicWord />
    </section>
  );
}
