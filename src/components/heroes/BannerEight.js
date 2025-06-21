import React from 'react'


import {VideoBg} from '../common/videoBG'

const BannerEight = () => {
  return (
    <section className="hero-section hero-8 hero-video bg-dark position-relative">
      <div className="video-wrapper position-absolute w-100 top-0 start-0 z-0">
        <VideoBg/>
      </div>
      <div className="hero-wrapper mx-auto position-relative h-100">
        {/* <!-- hero-8-image --> */}

        {/* <!-- container --> */}
        <div className="container d-none d-md-block" style={{height: 'calc(100vh - 400px)'}}/>
        <div className="container d-md-none d-block" style={{height: 'calc(100vh - 300px)'}}/>
        {/* <!-- event-info --> */}
      </div>
    </section>
  )
}

export default BannerEight




