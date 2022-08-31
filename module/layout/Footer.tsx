import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import CustomButton from "../element/CustomButton";
export default function Footer() {
  const [isView, setView] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="tittle">
          {" "}
          <h1>
            Create a website that{" "}
            <em className="hightlight-header">
              <strong> stands out</strong>
              <em className={`basic-underline ${isView && "animated"}`}>
                {" "}
                <svg
                  viewBox="-320 -70.8161 640.4 59.82"
                  preserveAspectRatio="none"
                >
                  <path
                    style={{ animationDuration: "1.8s" }}
                    d="M-300,-56 C-50,-72 298,-65 300,-59 C332,-53 -239,-36 -255,-27 C-271,-18 -88,-24 91,-20"
                    stroke="#fff"
                    pathLength="1"
                    strokeWidth="4.4444444444444"
                    fill="none"
                  ></path>
                </svg>
              </em>
            </em>{" "}
          </h1>
        <CustomButton onClick={() => ""}>Purchase Salient</CustomButton>
        </div>

        <InView
          as="div"
          triggerOnce
          onChange={(inView) => setView(inView)}
        ></InView>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Salient.</p>
        <ul className="footer-bottom-right">
          <li>
            <a href=""></a>Docs<a href=""></a>
          </li>
          <li>
            <a href=""></a>Help Center<a href=""></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
