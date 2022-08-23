import React, { useState } from "react";
import DemoTab from "./DemoTab";
import {data} from "./DemoData";
import DemoType from "../../../../interface/DemoType"
import Fillter from "./Fillter";
interface listItem {
  id: number;
  tittle: string;
}
export default function Index() {
  const [selected, selecting] = useState(0);
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
    <section className="section section-demo">
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
          <Fillter List={List} selected={selected} selecting={(v:number)=>selecting(v)} />
        </div>
        <div className="section-demo-items-list">
          {data.map((data:DemoType) => (
            <DemoTab key={data.id} demo={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
