
import React from 'react'
import Image from 'next/image'

import WordOpacity from '../WordOpacity';

const ScheduleCardOne = ({ schedule_name, time, desc, img }) => {

    return (
        <li >
            <div className="schedule-author">
                <Image src={img} alt="img" />
            </div>
            <div className="schedule-content">
                <h5 className="fw-semibold">{time}</h5>
                <h3 className="fw-extra-bold text-opacity"><WordOpacity paragraph={schedule_name} /> </h3>
                <p className="custom-sans custom-font-style-1">
                    {desc}
                </p>
            </div>
        </li>
    )
}

export default ScheduleCardOne