import React from 'react'

const VideoIcon = ({width, height}) => {
    return (
        <svg width={width} height={height}>
            <use xlinkHref="#video-icon">
                <symbol id="video-icon" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </symbol>
            </use>
        </svg>
    )
}

export default VideoIcon