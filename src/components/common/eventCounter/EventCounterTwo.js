import React from 'react'
import SlotCounter from "react-slot-counter";

const counterData = [
    {
        id: 1,
        span1: "Event",
        span2: "Artists",
        count_value: 30
    },
    {
        id: 2,
        span1: "Event",
        span2: "Stages",
        count_value: 10
    },
    {
        id: 3,
        span1: "Event",
        span2: "Concert",
        count_value: 31
    },
    {
        id: 4,
        span1: "Event",
        span2: "Sponsor",
        count_value: 8
    },
]
const EventCounterTwo = () => {
    return (
        <div className="counter-section pt-50 pt-lg-100 pt-xxl-130">
            <div className="container">
                <div className="event-counter event-counter-style-2">
                    <div className="row row-cols-2 gy-lg-0 gy-4 justify-content-between">
                        {
                            counterData.map(({ id, count_value, span1, span2 }) => {
                                return (
                                    <div key={id} className="col-md-6 col-lg-3">
                                        <div className="d-flex align-items-center justify-content-center gap-1">
                                            <span className="odometer text-primary display-2" style={{ fontWeight: "bold" }}><SlotCounter startValue={0} value={count_value} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} /></span>
                                            <h3 className="fw-extra-bold d-flex flex-column custom-jakarta"><span>{span1}</span><span>{span2}</span></h3>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCounterTwo