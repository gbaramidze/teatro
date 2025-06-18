import React from 'react'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Youtube from '../icons/Youtube'
import Spotify from '../icons/Spotify'
import Image from 'next/image'

const LineupCard = ({cardColor, genere, img, name, socil_link}) => {
    return (

        <div className="lineup-image-wrapper position-relative">
            <div className={`lineup-image ${cardColor}`}>
                <Image src={img}   className="img-fluid" alt="lineup-image" />
            </div>
            <div className="lineup-image-hover">
                <p className="author-name">{name}</p>
                <div className="line-up-hover-content">
                    <h5 className="fw-medium mb-20">Genere : <span className="text-uppercase">{genere}</span></h5>
                    <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
                        <a href="#" className="facebook-icon" aria-label="facebook"><Facebook height={"20"} width={"20"} /></a>
                        <a href="#" className="instagram-icon" aria-label="instagram"><Instagram /></a>
                        <a href="#" className="youtube-icon" aria-label="youtube"><Youtube /></a>
                        <a href="#" className="spotify-icon" aria-label="spotify"><Spotify /></a>
                    </div>
                </div>
            </div>
            {/* -- lineup-image-hover -- */}
        </div>
        
    )
}

export default LineupCard