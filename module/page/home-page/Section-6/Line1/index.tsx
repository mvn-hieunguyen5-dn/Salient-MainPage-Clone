import React from 'react'
import Image from "next/image";

import SVGBanner1 from "./Line1Banner1Inmage";
import VideoL1B3 from "./Line1Banner3Video";
export default function index() {
  const Links = {
    banner1:
      "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/megamenu-2.png",
    banner2: "",
  };
  return (
    <div className="banner-line line-1">
        <div className="banner banner-1">
          <p className="new">New</p>
          <h4>Lottie Integration</h4>
          <p className="description ">
            Tap into a vast library of free, beautiful animations or create your
            own using Adobe After Effects.
          </p>
          <div className="img">
            <SVGBanner1 />
          </div>
        </div>
        <div className="banner banner-2">
          <h4>Mega Menu Builder</h4>
          <p className="description ">
            Build gorgeous megamenus with columns, images, icons, and buttons
            all through an easy interface.
          </p>
          <div className="img">
            <Image
              src={Links.banner1}
              layout="responsive"
              width={562}
              height={479}
              alt="banner1"
            />
          </div>
        </div>
        <div className="banner banner-3">
          <h4>Search With Substance</h4>
          <p className="description ">
            Advanced AJAX search functionality with multiple layout options that
            are capable of bringing up results in real-time.
          </p>
          <div className="img">
            <VideoL1B3 />
          </div>
        </div>
      </div>
  )
}
