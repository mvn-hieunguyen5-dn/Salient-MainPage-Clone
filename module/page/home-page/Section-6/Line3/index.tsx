import React from "react";
import CustomButton from "../../../../element/CustomButton";
import Image from "next/image";
import Report from "./report";
export default function index() {
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
        <div className="popup">
          <Report />
        </div>
      </div>
    </div>
  );
}
