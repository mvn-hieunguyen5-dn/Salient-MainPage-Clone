import React, { useState } from "react";
import FillterStyle from "./Fillter.module.scss";
export default function Fillter({
  List,
  selected,
  selecting
}: {
  List: any[];
  selected: number;
  selecting: Function;
}) {
  const [isOpened, setOpen] = useState(false);
  console.log(FillterStyle);
  
  return (
    <div className={FillterStyle.TittleModule} >
      <h5 className={FillterStyle.header} onClick={()=>setOpen(!isOpened)}>Filter</h5>
      <ul className={`${FillterStyle.fillterList}   ${isOpened && FillterStyle.opened} `}>
      {List.map((item) => (
        <p
          className={`item ${selected === item.id && "selected"}`}
          key={item.id}
          onClick={() => selecting(item.id)}
        >
          {item.tittle}
        </p>
      ))}
      </ul>
    </div>
  );
}
