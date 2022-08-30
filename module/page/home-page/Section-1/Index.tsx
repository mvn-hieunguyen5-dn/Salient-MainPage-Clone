import React,{useState}from "react";
import Image from "next/image";
import SampleWindows from "./sampleWindows";
import CustomButton from "../../../element/CustomButton"
// import { InView } from "react-intersection-observer";

export default function Index() {
  const [isView, setView] = useState(true);
  const ImgLink = {
    p1: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/blue-1-140x140.jpg",
    p2: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/dmitriy-zub-w4NPe3L9_E8-unsplash-140x140.jpg",
    p3: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/face-3-140x140.jpg",
    p4: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/face-4-140x140.jpg",
  };
  return (
    <section className="secion-first-intro">
      {/* <InView as="div" triggerOnce  onChange={(inView) => setView(inView)}></InView> */}
      <div className="first-intro-container">
        <div className="first-intro-content">
          <div className="first-intro-content-up">
            <div className="first-intro-content-up-tittle">
              <h1>
                <em className="hightlight-header">
                  <strong>Beautiful</strong>
                  <svg
                    className={`basic-underline ${isView && "animated"} `}
                    viewBox="-400 -55 730 60"
                    preserveAspectRatio="none"
                  >
                    <path
                      style={{ animationDuration: "1.3s" }}
                      d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15"
                      stroke="#ffffff"
                      pathLength="1"
                      strokeWidth="8"
                      fill="none"
                    ></path>
                  </svg>
                </em>{" "}
                websites with less work
              </h1>
              <CustomButton onClick={()=>""} > Explore Features </CustomButton>
            </div>
            <div className="first-intro-content-up-decription">
              <p className="content">
                Salient is a next-generation WordPress theme that brings
                professional design results to anyone, without any coding
                required.
              </p>

              <ul className="users">
                <li>
                  <div className="user user-1">
                    <Image
                      src={ImgLink.p1}
                      alt={`Logo`}
                      layout="fill"
                      // position={"static"}
                      objectFit="cover"
                      className="z-0"
                    />
                  </div>
                </li>
                <li>
                  <div className="user user-1">
                    <Image
                      src={ImgLink.p2}
                      alt={`Logo`}
                      layout="fill"
                      // position={"static"}
                      objectFit="cover"
                      className="z-0"
                    />
                  </div>
                </li>
                <li>
                  <div className="user user-1">
                    <Image
                      src={ImgLink.p3}
                      alt={`Logo`}
                      layout="fill"
                      // position={"static"}
                      objectFit="cover"
                      className="z-0"
                    />
                  </div>
                </li>
                <li>
                  <div className="user user-1">
                    <Image
                      src={ImgLink.p4}
                      alt={`Logo`}
                      layout="fill"
                      // position={"static"}
                      objectFit="cover"
                      className="z-0"
                    />
                  </div>
                </li>
              </ul>
              <p>6k+ reviews (4.8 of 5)</p>
            </div>
          </div>
          <div className="first-intro-content-bottom">
            <SampleWindows />
          </div>
        </div>
      </div>
    </section>
  );
}
