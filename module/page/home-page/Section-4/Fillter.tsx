import React, { useState } from "react";
import FillterStyle from "./Fillter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Fillter({
  List,
  selected,
  selecting,
}: {
  List: any[];
  selected: number;
  selecting: Function;
}) {
  const [isOpened, setOpen] = useState(false);

  return (
    <div className={FillterStyle.TittleModule}>
      <div
        className={FillterStyle.header}
        onClick={() => setOpen(!isOpened)}
      >
        <FontAwesomeIcon icon={isOpened ? faMinus : faPlus}  height={18}/> <h5>Filter</h5>
      </div>

      <ul
        className={`${FillterStyle.fillterList}   ${
          isOpened && FillterStyle.opened
        } `}
      >
        {List.map((item) => (
          <li key={item.id}>
            {" "}
            <p
              className={`item ${selected === item.id && "selected"}`}
              onClick={() => selecting(item.id)}
            >
              {item.tittle}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
