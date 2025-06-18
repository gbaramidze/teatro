import React from 'react'

const DashIcon = ({ width, height }) => {
    return (
        <svg width={width} height={height}>
            <use xlinkHref="#dash-icon">
                <symbol id="dash-icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                </symbol>
            </use>
        </svg>
    )
}

export default DashIcon