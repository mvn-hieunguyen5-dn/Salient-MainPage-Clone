import React from "react";
import FlyingBird from "../../module/icon-and-svg/FlyingBird";
import OutlineButton from "../../module/element/CustomButton";
import Report from "../../module/page/home-page/Section-6/Line3/report";
import Line4Banner3SVG from "../../module/page/home-page/Section-6/Line4/Line4Banner3SVG";
import SampleWindows from "../../module/page/home-page/Section-1/sampleWindows";
export default function Index() {
  return (
    <div className="test-page">
      <h1>Header 1</h1>
      <code>Cambo, Open Sans, 81px</code>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <p>Text in the p tag</p>
      <code>Roboto: 20px</code>
      <span>Text in a span tag</span>

      <h3>Background color:</h3>
      <ul className="color-board">
        <li>
          <p>Background 1</p>
          <div className="color-block background1"></div>
        </li>
        <li>
          <p>Background 2</p>
          <div className="color-block background2"></div>
        </li>
        <li>
          <p>Background 3</p>
          <div className="color-block background3"></div>
        </li>
        <li>
          <p>Background tab</p>
          <div className="color-block background-tab"></div>
        </li>
        <li>
          <p>Background hight-light</p>
          <div className="color-block highlight-background"></div>
        </li>
      </ul>
      <ul className="flex-col-gap3">
        <li>
          <OutlineButton onClick={() => console.log()} type={2}>
            blacktton
          </OutlineButton>
        </li>
        <li>
          <OutlineButton onClick={() => console.log()}>
            outline-button
          </OutlineButton>
        </li>
      </ul>
      <div>
        <FlyingBird />
      </div>
      <div>
        <Report />
      </div>
      <Line4Banner3SVG />
    </div>
  );
}
