import React, { useState } from "react";
import FlyingBird from "../../../icon-and-svg/FlyingBird";
import { InView } from "react-intersection-observer";
export default function Index() {
  const [animated, setAnimated] = useState(false);

  return (
    <>
      {" "}
      <section className="section-sologan" >
        <InView
          triggerOnce
          as="div"
          onChange={(inView) => setAnimated(inView)}
        ></InView>

        <div className={`container ${animated && "animated"}`}>
          <div className="line">
            <h1 className="line">ENCHANT</h1> <FlyingBird />
          </div>
          <div className="line">
            <h1>YOUR</h1>
          </div>
          <div className="line">
            <h1>AUDIANCE</h1>
          </div>
        </div>
      </section>
    </>
  );
}
