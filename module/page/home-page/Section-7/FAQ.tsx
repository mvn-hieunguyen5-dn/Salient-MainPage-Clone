import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
export default function FAQ({
  id,
  question,
  answer,
  openedLine,
  setOpenLine,
}: {
  id: Number;
  question: String;
  answer: String | JSX.Element;
  openedLine: Number;
  setOpenLine: Function;
}) {
  return (
    <div
      className={`FAQ-line ${openedLine === id && "open"} `}
      onClick={() => {
        setOpenLine(id);
      }}
    >
      <h4 className="question">
        {question}{" "}
        <FontAwesomeIcon
          icon={openedLine === id ? faMinusCircle : faCirclePlus}
          // height={20}
          style={{ animationDuration: "2s"}}
        />
      </h4>

      <div className="answer">{answer}</div>
    </div>
  );
}
