import React from 'react'

const RoundText = ({ style, text }) => {
    const character = text.split('')
    return (
        <p>
            {
                character.map((item, index) => <span key={index} style={{transform:`rotate(${index * 9.6}deg)`}}>{item}</span>)
            }
        </p>
    )
}

export default RoundText