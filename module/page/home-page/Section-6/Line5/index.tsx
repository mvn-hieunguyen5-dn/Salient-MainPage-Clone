import React from "react";
import Image from "next/image";
export default function Index() {
  return (
    <div className="banner-line line-5">
      <div className="banner banner-1">
        <h4>Salient Help Center</h4>
        <p className="description ">
          We offer hands-on support with a professional team of agents to ensure
          that your questions get answered in a timely manner.
        </p>
        <div className="img">
        <Image
              src={
                "https://themenectar.com/img/demo-media/promo/helpcenter.webp"
              }
              width={1900}
              height={993}
              alt="banner1"
            />
        </div>
      </div>
      <div className="banner banner-2">
        <h4>Demo Importer</h4>
        <p className="description">
          Easily import any of the demos with one click via our simple demo
          importer plugin.
        </p>
      </div>
    </div>
  );
}
