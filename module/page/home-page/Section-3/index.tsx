import React from "react";
import UserQuote from "../../../element/userQuote";
export default function index() {
  return (
    <section className="section section-function ">
      <div className="container">
        <div className="sticky-left ">
          <div className="video-container">
            <div>
              {" "}
              <video
                width="90%"
                height="90%"
                preload="auto"
                loop
                muted
                playsInline
                autoPlay
                className="fit-cover align-default nectar-lazy-video loaded"
                style={{ visibility: "visible" }}
              >
                <source
                  data-nectar-video-src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/studio-5.mp4"
                  type="video/mp4"
                  src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/studio-5.mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="scrolling-right ">
          <article className="content-1">
            <h3>Template library</h3>
            <p className="block">
              Not all templates are created equal. Salient offers access to a
              perpetually updated library of professional section templates,
              with currently over 400 to choose from — all created with passion
              and held to a high standard for aesthetic quality.
            </p>
          </article>
          <UserQuote />
          <div className="scrolling-right-blank-space"></div>
          {/* So it's gonna be forever
          Or it's gonna go down in flames */}
          <article className="content-1">
            <h3>Visual page builder</h3>
            <p className="block">
              Build like it’s 2022. Experience a high-performing, modern take on
              the WPBakery page builder — The editor you already know, but with
              supercharged power to handle complex designs and the flexibility
              to create <strong>any type of website.</strong>
            </p>
            <ul className="list">
              <li>Set option values unique based on screen size</li>
              <li>Sidebar & modal editing layout options</li>
              <li>Visually intuitive graphical settings UI</li>
              <li>Front-end & back-end editors</li>
              <li>Reusable global sections</li>
              <li>Tree-list element view</li>
            </ul>
          </article>
          <div className="scrolling-right-blank-space"></div>
          <article className="content-1">
            <h3>Visual page builder</h3>
            <p className="block">
              A unique collection of over <strong>65 elements </strong>that make
              building a beautiful site easy. The Salient element set brings the
              latest web trends to your fingertips without any coding needed. We
              actively seek to bring fresh innovation by pushing the boundaries
              of what’s possible on the web.
            </p>
            <UserQuote />
          </article>
        </div>
      </div>
    </section>
  );
}
