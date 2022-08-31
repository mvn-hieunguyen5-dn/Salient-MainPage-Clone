import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  WhatNews,
  Elements,
  Portfolio,
  Blog,
  WooCommerce,
} from "./HeaderDropBar";

export default function Header({ isHideHeader }: { isHideHeader: boolean }) {
  const ImgLink = {
    logo: "https://themenectar.com/salient/wp-content/uploads/sites/4/2020/04/dark-non-retina.png",
  };
  return (
    <nav
      className="header-nav"
      style={{
        top: `${isHideHeader ? "-100px" : "0px"}`,
      }}
    >
      <div className="logo">
        <Image
          src={ImgLink.logo}
          alt={`Logo`}
          layout="fill"
          // position={"static"}
          objectFit="cover"
          className="z-0"
          loading="eager"
          priority
        />
      </div>
      <ul className="left-nav">
        <li className="left-nav-item">
          <a>What&apos;s New</a>
          <WhatNews />
        </li>
        <li className="left-nav-item">
          <a>Elements</a>
          <Elements />
        </li>
        <li className="left-nav-item">
          <a>Portfolio</a>
          <Portfolio />
        </li>
        <li className="left-nav-item">
          <a>Blog</a>
          <Blog />
        </li>
        <li className="left-nav-item">
          <a>WooCommercce</a>
          <WooCommerce />
        </li>
      </ul>
      <div className="blank-space"></div>
      <ul className="right-nav">
        <li className="right-nav-item">
          <a>Demos</a>
        </li>
        <li className="right-nav-item">
          <button className="purchase-button">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Purchse</p>
          </button>
        </li>
      </ul>
      <div className="mobile-right-nav">
        <p>Menu</p>
        <FontAwesomeIcon icon={faBars} height={20} />
      </div>
    </nav>
  );
}
