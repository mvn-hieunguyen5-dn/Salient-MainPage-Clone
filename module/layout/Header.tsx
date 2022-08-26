import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

  const ImgLink = {
    logo: "https://themenectar.com/salient/wp-content/uploads/sites/4/2020/04/dark-non-retina.png",
  };
  return (
    <nav className="header-nav">
      <div className="logo">
        <Image
          src={ImgLink.logo}
          alt={`Logo`}
          layout="fill"
          // position={"static"}
          objectFit="cover"
          className="z-0"
          priority
        />
      </div>
      <ul className="left-nav">
        <li></li>
        <li>
          <a>What&apos;s New</a>
        </li>
        <li>
          <a>Elements</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>WooCommercce</a>
        </li>
      </ul>
      <div className="blank-space"></div>
      <ul className="right-nav">
        <li>
          <a>Demos</a>
        </li>
        <li>
          <button className="purchase-button">
            <FontAwesomeIcon icon={faCartShopping} />
            <a>Purchse</a>
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
