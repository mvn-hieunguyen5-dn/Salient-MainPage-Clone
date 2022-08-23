import React from "react";
import Image from "next/image";
export default function userQuote() {
  return (
    <div className="user-quote">
      <p className="user-quote-content">
        “Salient is a fantastic theme — It wouldn’t be wrong to say that it is
        one of the best WordPress multipurpose themes available in the market.”
      </p>
      <div className="user-quote-info">
        <div className="user-info-left user medium">
          <Image
            src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/amir-soltani-CLy5DoYeKuk-unsplash.jpg"
            alt={`Logo`}
            layout="fill"
            // position={"static"}
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="user-info-right">
          <strong>Farhan Ayub</strong>
          <p>Cloudways Manager</p>
        </div>
      </div>
    </div>
  );
}
