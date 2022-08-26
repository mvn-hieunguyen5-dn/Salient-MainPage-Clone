import React, { useState } from "react";
import Image from "next/image";
import DemoStyle from "./DemoTab.module.scss";
import DemoType from "../../../../interface/DemoType";
import { spawn } from "child_process";
interface typeProp {
  demo:DemoType;
  setEnter: Function;
}
export default function DemoTab({demo,setEnter}:typeProp) {
  const [hoverSc, setHoverSc] = useState(true);
  
  return (
    <div
      className="section-demo-items-list-element"
      onMouseEnter={()=>setEnter(true)}
      onMouseLeave={()=>setEnter(false)}
    >
      <div className={DemoStyle.Upper + " " + (hoverSc && DemoStyle.hovered)}>
        <Image
          src={demo.pc}
          width={1920}
          height={1300}
          alt="demo picture"
          // layout="fill"
          className={DemoStyle.img}
          objectFit="cover"
        />{" "}
        <div className={DemoStyle.mobile}>
          <Image
            src={demo.mobile}
            width={1080}
            height={2020}
            alt="demo picture"
            // layout="fill"
            // className={DemoStyle.img}
            objectFit="cover"
          />
        </div>
      </div>

      <div className={DemoStyle.tittle}>
        <h5>{demo.tittle} </h5>
        {
          demo.type.map((t)=><span key={t}>{t}</span>)
        }
      </div>
    </div>
  );
}
