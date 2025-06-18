import React from 'react'
import WordOpacity from '../WordOpacity'

const ScheduleCardTwo = ({ date, vanu, desc }) => {
    return (
        <li className="d-flex flex-column flex-lg-row gap-1 gap-lg-70 gap-xxl-90">
            <h2 className="fw-extra-bold schedule-time text-opacity custom-jakarta"> <WordOpacity paragraph={date} /></h2>
            <div>
                <h2 className="fw-semibold text-opacity custom-jakarta"><WordOpacity paragraph={vanu}/></h2>
                {desc &&
                    <p className="custom-jakarta custom-font-style-2">
                        {desc}
                    </p>
                }
            </div>
        </li>
    )
}

export default ScheduleCardTwo