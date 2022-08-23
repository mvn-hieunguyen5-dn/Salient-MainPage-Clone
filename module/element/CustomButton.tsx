import React, { useCallback, useEffect, useState } from "react";
interface Props {
  children: string;
  onClick: Function;
  type?: 1 | 2 | 3;
  //outline button - blue-button - purchase-button
}
export default function OutlineButton({ children, onClick, type = 1 }: Props) {
  const [theme, setTheme] = useState("");
  let charArr: string[] = children.split("");
  let t = 0.015;
  useEffect(() => {
    type === 1
      ? setTheme("outline-button")
      : type === 2
      ? setTheme("black-button")
      : setTheme("purchase-button");
  }, [type]);
  let i = 1;
  return (
    <button className={theme} onClick={() => onClick()}>
      <span>
        {
          
        charArr.map((c) => {
          return (
            <span
              className="char"
              key={i++}
              style={{ animationDelay: `${(t = t + 0.015)}s` }}
            >
              {c}
            </span>
          );
        })}
      </span>
    </button>
  );
}
