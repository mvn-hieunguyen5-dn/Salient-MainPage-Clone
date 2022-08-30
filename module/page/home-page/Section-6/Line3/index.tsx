import React, { useState } from "react";
import CustomButton from "../../../../element/CustomButton";
import Image from "next/image";
import Report from "./report";
import { InView } from "react-intersection-observer";


export default function Index() {
  const [animated, setAnimated] = useState(false);
  return (
    <div className="banner-line line-3">
      <h4>Powerful WooCommerce Functionality</h4>
      <p className="description">
        Unlock incredible store building potential with an AJAX off-canvas cart,
        product quickview, advanced reviews, premium gallery styles, collapsable
        product widget area, and much more.
      </p>
      <CustomButton type={2} onClick={() => {}}>
        View All Feature
      </CustomButton>
      <div className="img">
        <Image
          src={
            "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/woo-1-1536x767.jpg"
          }
          width={1536}
          height={767}
          layout="intrinsic"
          alt="sd"
        />
        <InView as="div" triggerOnce  onChange={(inView, entry) => setAnimated(inView)}>
          <div className={`popup ${animated && "animated"}`}>
            <Report />
          </div>
        </InView>
      </div>
    </div>
  );
}
