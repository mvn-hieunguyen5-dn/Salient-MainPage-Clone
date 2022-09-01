import React, { useEffect, useState } from "react";
import Image from "next/image";

interface sponsor {
  id: number;
  img: string;
}
export default function SponsorSlider() {
  const [spot, setSpot] = useState(0);
  const devSpeed = 500;
  const [speed, setSpeed] = useState(devSpeed);
  let first = 20;
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [isTurnRight, setIsTurnRight] = useState(0);
  const [isMouseGrap, setIsMousrGrap] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const Sponsors: sponsor[] = [
    {
      id: 1,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/hubspot-4.png",
    },
    {
      id: 2,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/envato-1.png",
    },
    {
      id: 3,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/01/awwwards.png",
    },
    {
      id: 4,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/01/hongkiat.png",
    },
    {
      id: 5,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/01/templatic.png",
    },
    {
      id: 6,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/01/sitepoint.png",
    },
    {
      id: 7,
      img: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/01/cloudways.png",
    },
  ];
  useEffect(() => {
    const AutoSlide = setInterval(function () {
      setSpeed(devSpeed);
      // isLoop && setSpot(spot + 1);
      !isMouseGrap && setSpot(spot + 1);
    }, speed);

    if (spot >= first * Sponsors.length) setSpot(0);
    if (spot < 0) setSpot(first * Sponsors.length - 1);

    return () => {
      clearInterval(AutoSlide);
    };
  }, [spot, setSpot, first, Sponsors.length, speed, isMouseGrap]);

  return (
    <>
      { devMode &&    <div className="flex-center">
        <div
          className={`flex-center test-m mouse-position ${
            spot < first * Sponsors.length ? "right" : "left"
          }`}
          style={{ top: `200px`, left: `${coord.y}px` }}
        >
          Position : {spot} vw
        </div>
        <div
          className={`flex-center test-m mouse-position ${
            isTurnRight > 0 ? "right" : isTurnRight < 0 && "left"
          }`}
          style={{ top: `200px`, left: `${coord.y}px` }}
        >
          {isTurnRight > 0 ? `> ${isTurnRight}` : `< ${isTurnRight}`}
        </div>
        <div
          className={`flex-center test-m mouse-position ${
            isMouseGrap ? "right" : "left"
          }`}
          style={{ top: `200px`, left: `${coord.y}px` }}
        >
          {isMouseGrap ? "mouse grap" : "mouse up"}
        </div>
      </div>
      }
   
      <div
        onMouseMove={(e) => {
          setCoord({ x: e.screenY, y: e.screenX });
          setIsTurnRight(e.movementX);
          // isMouseGrap && setSpot(e.movementX < 0 ? spot + 1 : spot - 1);
          isMouseGrap && setSpot(spot - e.movementX);
        }}
        onMouseDownCapture={(e) => {
          setIsMousrGrap(true);
          console.log(e);
        }}
        onMouseUp={() => setIsMousrGrap(false)}
        onDoubleClick={()=>setDevMode(!devMode)}
      >
        <div
          className="flickity-slider"
          style={{
            transitionDuration: `${
              spot === 0 || spot === 140 || isMouseGrap ? 0 : speed + 20
            }ms`,
            transform: `translateX(${-spot}vw)`,
          }}
        >
          {Sponsors.map((s) => (
            <div
              key={s.id}
              className={`logo-container logo-${s.id} `}
              style={{
                transform: `translateX(${
                  spot > first * s.id ? first * Sponsors.length : 0
                }vw)`,
              }}
            >
              <Image
                src={s.img}
                alt="sponsor"
                height={113}
                width={373}
                // layout="fill"
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
