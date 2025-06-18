import React from 'react'

const ScheduleTabs = ({ulClass}) => {
    return (
        <ul className={`${ulClass}`} id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="schedule-button active" id="day-1-tab" data-bs-toggle="pill" data-bs-target="#day-1" type="button" role="tab" aria-controls="day-1" aria-selected="true">
                    <span className="fs-3 fw-extra-bold mb-0 custom-roboto">Day 1</span>
                    <span className="fs-5 fw-semibold mb-0 custom-roboto d-none d-lg-block">August 25, 2023</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="schedule-button" id="day-2-tab" data-bs-toggle="pill" data-bs-target="#day-2" type="button" role="tab" aria-controls="day-2" aria-selected="false">
                    <span className="fs-3 fw-extra-bold mb-0 custom-roboto">Day 2</span>
                    <span className="fs-5 fw-semibold mb-0 custom-roboto d-none d-lg-block">August 25, 2023</span>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="schedule-button" id="day-3-tab" data-bs-toggle="pill" data-bs-target="#day-3" type="button" role="tab" aria-controls="day-3" aria-selected="false">
                    <span className="fs-3 fw-extra-bold mb-0 custom-roboto">Day 3</span>
                    <span className="fs-5 fw-semibold mb-0 custom-roboto d-none d-lg-block">August 25, 2023</span>
                </button>
            </li>
        </ul>
    )
}

export default ScheduleTabs