import React from 'react'

export function VideoBg() {
  const isBeforeJune25 = new Date() < new Date('2025-06-25');

  const mobileVideoSrc = isBeforeJune25
    ? '/videos/fuego.mp4'
    : '/videos/video-mobile.mp4';

  return (
    <>
      <video
        className="d-none d-md-block video-size"
        muted
        loop
        autoPlay
        preload="none"
      >
        <source src="/videos/video.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <video
        className="video-size d-block d-md-none"
        src={mobileVideoSrc}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={mobileVideoSrc} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </>
  );
}
