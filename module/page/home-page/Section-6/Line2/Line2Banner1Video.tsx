import React from "react";

export default function Line2Banner1Video() {
  return (
    <video
      width={1280}
      height={720}
      className="nectar-video-self-hosted nectar-lazy-video loaded"
      preload="auto"
      loop
      autoPlay
      muted
      playsInline
      style={{ visibility: "visible" }}
    >
      <source
        data-nectar-video-src="https://themenectar.com/salient/wp-content/uploads/sites/4/2021/05/interface.mp4"
        type="video/mp4"
        src="https://themenectar.com/salient/wp-content/uploads/sites/4/2021/05/interface.mp4"
      />
    </video>
  );
}
