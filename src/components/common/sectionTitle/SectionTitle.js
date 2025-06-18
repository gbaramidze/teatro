import React from 'react'
import WordOpacity from '../WordOpacity'

const SectionTitle = ({ title, subTitle, titleClass, subTitleClass }) => {

    return (
        <h2 className="title display-3 fw-extra-bold d-flex flex-column"  >
            <span className={`mb-n2 text-opacity ${titleClass}`}> <WordOpacity paragraph={title} /></span>
            <span className={`sub-title fw-extra-bold  ${subTitleClass}`}>

                <svg xmlns="http://www.w3.org/2000/svg" className="gradient-subtitle">
                    <defs>
                        <linearGradient id="gradient-subtitle" y1="0" y2="1">
                            <stop stopColor="var(--bs-primary)" offset="0" />
                            <stop stopColor="var(--bs-secondary)" offset="1" />
                        </linearGradient>
                    </defs>
                    <g>
                        <text id="text" y="100" strokeWidth="1.5" stroke="url(#gradient-subtitle)" fill="none">{subTitle}</text>
                    </g>
                </svg>

            </span>
        </h2>
    )
}

export default SectionTitle