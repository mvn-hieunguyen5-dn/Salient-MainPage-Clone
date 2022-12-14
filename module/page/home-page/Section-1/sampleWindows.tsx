import React from "react";
import Image from "next/image";
export default function SampleWindows() {
  const LinkImg = {
    header:
      "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/landing-toolbar-4-1536x59.png",
    main: "https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/promo-landing-builder-2.jpg",
  };
  return (
    <div className="sample-windows">
      <Image
        src={LinkImg.header}
        alt={`Logo`}
        height={92}
        width={2400}
        objectFit="cover"
        className="header"
        priority
      />
      <Image
        src={LinkImg.main}
        alt={`Logo`}
        height={928}
        width={2468}

        objectFit="cover"
        className="main"
        priority
      />
    </div>
  );
}
