import React from 'react'

const SectionDesc = ({ desc, className }) => {
    return (
        <p className={`mb-0 ${className}`}>
            {desc}
        </p>
    )
}

export default SectionDesc