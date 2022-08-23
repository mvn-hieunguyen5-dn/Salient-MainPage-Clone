import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1>
          Create a website that
          <em className="hightlight-header">
            <strong> stands out</strong>
            <div className="basic-underline">
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
            </div>
          </em>{" "}
        </h1>
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