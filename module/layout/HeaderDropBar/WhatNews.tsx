import React from "react";

export default function WhatNews() {
  return (
    <div className="what-new-drop drop">
      <ul className="what-new-drop-list">
        <li className="what-new-drop-item">
          <div
            className="img "
            style={{
              backgroundImage:
                "url(https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/Screen-Shot-2022-08-13-at-4.12.28-PM.png)",
            }}
          >
            {" "}
          </div>{" "}
          <div className="cover-on ">
            <a>SaaS theme Demo</a>
          </div>
        </li>
        <li className="what-new-drop-item">
          <div className="img"
           style={{
            backgroundImage:
              "url(https://themenectar.com/salient/wp-content/uploads/sites/4/2021/03/promo-menu-bg-3.jpg)",
          }}
          ></div>
          <div className="cover-on ">
            <a>Theme change log</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
//