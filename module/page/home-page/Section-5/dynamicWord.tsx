import React, { useEffect, useState } from "react";

export default function DynamicWord() {
  const [slideID, setSlide] = useState(0);
  useEffect(() => {
    const AutoSlide = setInterval(function () {
      if (slideID === 3) {
        setSlide(1);
      } else {
        setSlide(slideID + 1);
      }
    }, 3000);
    return () => {
      clearInterval(AutoSlide);
    };
  });
  return (
    <div className="section-trust-sponsor-speach">
      <div className="static-word">
        <h1>Trusted by</h1>
      </div>
      <div className="dynamic-words">
        <h1 className={`up-word ${slideID === 1 && "selected"}`}>
          <strong>130k websites</strong>
        </h1>
        <h1 className={`up-word ${slideID === 2 && "selected"}`}>
          <strong>top designers</strong>
        </h1>
        <h1 className={`up-word ${slideID === 3 && "selected"}`}>
          <strong>industry leader</strong>
        </h1>
      </div>
    </div>
  );
}
