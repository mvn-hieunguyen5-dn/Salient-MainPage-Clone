import React from "react";
import GroupLink from "../../../interface/HeaderLinkType";
import Eye from "../../icon-and-svg/EyeIconSVG";
import ProductIcon from "../../icon-and-svg/ProductIconSVG";
import SlideFIllter from "../../icon-and-svg/SlideFIllterSVG";
import CartSVG from "../../icon-and-svg/CartSVG";
export default function WooCommerce() {
  const MediaG: GroupLink = {
    tittle: "Media",
    childLinks: [
      { id: 0, tittle: "Inline Image Text", color: "blue" },
      { id: 1, tittle: "Video Lightbox" },
      { id: 2, tittle: "Video Player" },
      {
        id: 3,
        tittle: "Nectar Slider",
      },
      {
        id: 4,
        tittle: "Animated Image",
      },
      {
        id: 5,
        tittle: "Image CascadeHot",
        color: "red",
      },
      {
        id: 6,
        tittle: "Image Grid",
      },
      {
        id: 7,
        tittle: "Image Carousel",
      },
    ],
  };
  const StructureG: GroupLink = {
    tittle: "Structure",
    childLinks: [
      {
        id: 0,
        tittle: "Columns",
      },
      {
        id: 1,
        tittle: "Horizontal List Item",
      },
      {
        id: 2,
        tittle: "Shape Divider",
      },
      {
        id: 3,
        tittle: "Page Submenu",
      },
    ],
  };

  const TypographyG: GroupLink = {
    tittle: "Typography",
    childLinks: [
      {
        id: 0,
        tittle: "Rotating WordsNew",
        color: "blue",
      },
      {
        id: 2,
        tittle: "Animated Title",
      },
      {
        id: 3,
        tittle: "Gradient Text",
      },
    ],
  };
  const InteractiveG: GroupLink = {
    tittle: "Typography",
    childLinks: [
      {
        id: 0,
        tittle: "Lottie AnimationNew",
        color: "blue",
      },
      {
        id: 2,
        tittle: "Call to Action",
      },
      {
        id: 3,
        tittle: "Fancy Box",
      },
      {
        id: 4,
        tittle: "Flip Box",
      },
      {
        id: 5,
        tittle: "Image Comparison",
      },
      {
        id: 6,
        tittle: "Image Hotspots",
      },
      {
        id: 7,
        tittle: "Morphing Outline",
      },
      {
        id: 8,
        tittle: "Mouse Parallax",
      },
    ],
  };

  return (
    <div className="elements-drop drop">
      <ul className="container">
        <li
          className="img-left"
          style={{
            backgroundImage:
              "url(https://themenectar.com/salient/wp-content/uploads/sites/4/2021/05/eberhard-grossgasteiger-QcmwbZsQuro-unsplash-1024x721.jpg)",
          }}
        >
          <div
            className="font-layer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <h3>WooCommerce</h3>
            <p>
              Deep WooCommerce integration with tons of powerful options only
              available in Salient.
            </p>
          </div>
        </li>
        <li className="woo-line">
          <ul className="elements-drop-links ">
            <li className="woo-box">
              <div>
                <Eye />
              </div>

              <div>
                <a href="">Product quick view</a>
                <p>increase your sales.</p>
              </div>
            </li>
            <li className="woo-box">
              <div>
                <ProductIcon />
              </div>

              <div>
                <a href="">Product Layouts</a>
                <p>Highly customizable options.</p>
              </div>
            </li>

            <li className="woo-box">
              <div>
                <SlideFIllter />
              </div>

              <div>
                <a href="">Side Filter Area</a>
                <p>Sticky and toggle functionality.</p>
              </div>
            </li>
            <li className="woo-box">
              <div>
                <CartSVG />
              </div>

              <div>
                <a href="">AJAX Cart</a>
                <p>Most advanced on the market.</p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <p>{StructureG.tittle}</p>
            {StructureG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
            <p>{TypographyG.tittle}</p>
            {TypographyG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <p>{InteractiveG.tittle}</p>
            {InteractiveG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
