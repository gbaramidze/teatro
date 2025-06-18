import React from 'react'
import Stories from "@/components/Stories";
export function VideoBg() {
    return (
      <>

          <video poster={'/videos/poster-video.jpg'} className="d-none d-md-block video-size" muted loop autoPlay preload="none">
            <source src={'/videos/video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <video
          className="video-size d-block d-md-none" // Shown on mobile, hidden on medium and larger
          src="/videos/video-mobile.mp4" // Your 9:16 mobile video
          autoPlay
          loop
          muted
          playsInline
        >
            <source src={'/videos/video-mobile.mp4'} type="video/mp4" />

            Your browser does not support the video tag.
        </video>
        </>
    )
}