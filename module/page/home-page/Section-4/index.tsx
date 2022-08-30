import React, { useState } from "react";
import DemoTab from "./DemoTab";
import { data } from "./DemoData";
import DemoType from "../../../../interface/DemoType";
import Fillter from "./Fillter";
import CustomButton from "../../../element/CustomButton";
interface listItem {
  id: number;
  tittle: string;
}
export default function Index() {
  const [Coord, setCoord] = useState({ x: 0, y: 0 });
  const [selected, selecting] = useState(0);
  const [isEnterView, setEnterView] = useState(false);
  const List: listItem[] = [
    { id: 0, tittle: "All" },
    { id: 1, tittle: "Business" },
    {
      id: 2,
      tittle: "One Page",
    },
    {
      id: 3,
      tittle: "Portfolio",
    },
    { id: 4, tittle: "Shop" },
  ];
  return (
    <section
      className="section section-demo"
      onMouseMove={(e) => {
        setCoord({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className={`round-crusor  ${isEnterView && "show"} `}
        style={{
          top: `${Coord.y}px`,
          left: ` ${Coord.x}px`,
          transitionDuration: "250ms",
        }}
      ></div>
      <p
        className={`view-crusor  + ${isEnterView && "show"}`}
        style={{
          top: `${Coord.y}px`,
          left: ` ${Coord.x}px`,
          transitionDuration: "220ms",
        }}
      >
        View
      </p>
      <div className="uppder-slide">
        <ul className="line-slider">
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
          <li>
            <h1>DEMOS</h1>
          </li>
        </ul>
      </div>

      <div className="section-demo-items">
        <div className="section-demo-items-filter ">
          <Fillter
            List={List}
            selected={selected}
            selecting={(v: number) => selecting(v)}
          />
        </div>
        <div className="">
          {" "}
          <div className="section-demo-items-list">
            {data.map((data: DemoType) => (
              <DemoTab
                key={data.id}
                demo={data}
                setEnter={(value: boolean) => setEnterView(value)}
              />
            ))}
          </div>
          <div className="flex-center">
            <CustomButton onClick={() => {console.log("ss");
            }} type={2}>
              Load more
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
