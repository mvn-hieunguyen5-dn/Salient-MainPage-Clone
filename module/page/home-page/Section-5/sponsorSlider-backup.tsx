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
  const [isLoop, setLoop] = useState(false);
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
      if (spot === first * Sponsors.length) {
        // setSpeed(0);
        // setLoop(false);
        setSpot(0);
      } else {
        setSpeed(devSpeed);
        isLoop && setSpot(spot + 1);
      }
    }, speed);
    return () => {
      clearInterval(AutoSlide);
    };
  });
  return (
    <div
      className="flickity-slider"
      style={{
        transitionDuration: `${spot === 0 ? 0 : speed + 20}ms`,
        transform: `translateX(${-spot}vw)`,
      }}
    >
      {Sponsors.map((s) => (
        <div
          key={s.id}
          className={`logo-container logo-${s.id} `}
          style={{
            transform: `translateX(${spot > first * s.id ? first * Sponsors.length : 0}vw)`,
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
  );
}
