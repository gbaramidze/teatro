import React from 'react'
import WordOpacity from '../WordOpacity'

const SectionTitleTwo = ({ title, subTitle, titleClass, subTitleClass }) => {

    return (
        <h2 className="title display-3 fw-extra-bold d-flex flex-column"  >
            <span className={`mb-n2 text-opacity ${titleClass}`}> <WordOpacity paragraph={title} /></span>
            <span className={`sub-title fw-extra-bold  ${subTitleClass}`}>{subTitle}</span>
        </h2>
    )
}

export default SectionTitleTwo