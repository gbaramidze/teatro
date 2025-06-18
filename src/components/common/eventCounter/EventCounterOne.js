import React from 'react'
import SlotCounter from "react-slot-counter";

const counterData = [
    {
        id: 1,
        span1: "Event",
        span2: "Artists",
        count_value: 32
    },
    {
        id: 2,
        span1: "Event",
        span2: "Stages",
        count_value: 5
    },
    {
        id: 3,
        span1: "Days",
        span2: "Concert",
        count_value: 3
    }
]

const EventCounterOne = ({ styleNum }) => {
    // styleNum 0 from home page 4

    let numberClass;
    let parentClass;
    switch (styleNum) {
        case 0:
            numberClass = "custom-jakarta";
            parentClass = "event-counter-2 py-20 py-xxl-40"
            break;

        default:
            break;
    }

    // ----- Change classname define in home page

    return (
        <div className={`event-counter ${parentClass}`}>
            <div className="row row-cols-2 row-cols-md-3 gy-lg-0 gy-4 justify-content-between">
                {
                    counterData.map(({ id, count_value, span1, span2 }) => {
                        return (
                            <div key={id} className="col">
                                <div className="d-flex align-items-center gap-1 gap-lg-2">
                                    <span className={`odometer text-primary display-2 ${numberClass}`} style={{ fontWeight: "bold" }} >
                                        <SlotCounter startValue={0} value={count_value} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} />
                                    </span>
                                    <h3 className="fw-extra-bold d-flex flex-column custom-jakarta"><span>{span1}</span><span>{span2}</span></h3>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default EventCounterOne


