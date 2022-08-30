import React, { useState } from "react";
import UserQuote from "../../../element/userQuote";
// import TriggerOnScreen from "../../../element/TriggerOnScreen";
import { InView } from "react-intersection-observer";
export default function Index() {
  const [viewVid, setViewVid] = useState(0);
  return (
    <section className="section section-function ">
      <div className="container">
        <div className="sticky-left ">
          <div className="video-container">
            <div className="video">
              <video
                width="1800"
                height="700"
                preload="auto"
                loop
                muted
                playsInline
                autoPlay
                className="fit-cover align-default nectar-lazy-video loaded"
                style={{
                  visibility: viewVid === 1 ? "visible" : "hidden",
                  opacity: viewVid === 1 ? "1" : "0",
                }}
              >
                <source
                  data-nectar-video-src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/studio-5.mp4"
                  type="video/mp4"
                  src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/studio-5.mp4"
                />
              </video>

              <video
                width="1800"
                height="700"
                preload="auto"
                loop
                muted
                playsInline
                autoPlay
                className="fit-cover align-default nectar-lazy-video loaded"
                style={{
                  visibility: viewVid === 2 ? "visible" : "hidden",
                  opacity: viewVid === 2 ? "1" : "0",
                }}
              >
                <source
                  data-nectar-video-src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/studio-5.mp4"
                  type="video/mp4"
                  src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/page-builder-1.mp4"
                />
              </video>

              <video
                width="1800"
                height="700"
                preload="auto"
                loop
                muted
                playsInline
                autoPlay
                className="fit-cover align-default nectar-lazy-video loaded"
                style={{
                  visibility: viewVid === 3 ? "visible" : "hidden",
                  opacity: viewVid === 3 ? "1" : "0",
                }}
              >
                <source
                  data-nectar-video-src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/element-collection3.mp4"
                  type="video/mp4"
                  src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/element-collection3.mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="scrolling-right ">
          {/* <TriggerOnScreen /> */}
          <article className="content-1">
            <h3>Template library</h3>
            <p className="block">
              Not all templates are created equal. Salient offers access to a
              perpetually updated library of professional section templates,
              with currently over 400 to choose from — all created with passion
              and held to a high standard for aesthetic quality.
            </p>{" "}
            <UserQuote />{" "}
          </article>

          <InView
            as="div"
            onChange={(inView, entry) => inView && setViewVid(1)}
          ></InView>
          <video
            width="1800"
            height="700"
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
            <ul className="list block">
              <li>Set option values unique based on screen size</li>
              <li>Sidebar & modal editing layout options</li>
              <li>Visually intuitive graphical settings UI</li>
              <li>Front-end & back-end editors</li>
              <li>Reusable global sections</li>
              <li>Tree-list element view</li>
            </ul>{" "}
            <InView
              as="div"
              onChange={(inView, entry) => inView && setViewVid(2)}
            ></InView>
            <video
              width="1800"
              height="700"
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
                src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/page-builder-1.mp4"
              />
            </video>
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
            <UserQuote />{" "}
            <InView
              as="div"
              onChange={(inView, entry) => inView && setViewVid(3)}
            ></InView>
            <video
              width="1800"
              height="700"
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
                src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/element-collection3.mp4"
              />
            </video>
          </article>
        </div>
      </div>
    </section>
  );
}
