import React from "react";
import L4B3SVG from "./Line4Banner3SVG";
import Image from "next/image";
export default function Index() {
  return (
    <div className="banner-line line-4">
      <div className="banner banner-1">
        <h4>Free Updates for Life</h4>
        <p className="description ">
          Over the past 10 years, we&#96;ve consistently released updates with
          new features and fixes. You&#96;ll get free access to all future
          updates with a single purchase.
        </p>

        <div className="img">
          <Image
            src={
              "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/updates-3.png"
            }
            layout="responsive"
            width={562}
            height={479}
            alt="banner1"
          />
        </div>
      </div>
      <div className="line-4-right">
        <div className="banner banner-2">
          <div className="banner-2-left">
            <h4>Google Fonts</h4>
            <p className="description ">
              Choose from over 1,400 Google fonts with powerful responsive
              typography settings.
            </p>
          </div>
          <div className="banner-2-right img">
            <Image
              src={
                "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/Google_Fonts_logo2-1.png"
              }
              // layout="fill"
              width={600}
              height={460}
              alt="banner1"
            />
          </div>
        </div>
        <div className="banner banner-3">
          <h4>Blazing Performance</h4>
          <p className="description ">
            Salient is Built with modern tooling and includes a suite of simple
            to use, yet powerful performance options created to target page
            speed scoring. View the report from GTMetrix or Google Lighthouse.
          </p>
          <div className="img">
            <L4B3SVG />
          </div>
        </div>
      </div>
    </div>
  );
}
