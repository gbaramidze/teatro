import React from 'react'

const Star = ({ width, height }) => {
    return (
        <svg width={width} height={height}><use xlinkHref="#star-icon">
            <symbol id="star-icon" viewBox="0 0 47 42">
                <path d="M23.5 0L30.3794 14.8524L47 21L30.3794 27.1476L23.5 42L16.6206 27.1476L0 21L16.6206 14.8524L23.5 0Z" fill="white" />
            </symbol>
        </use></svg>
    )
}

export default Star