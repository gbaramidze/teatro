import React from 'react'
import ButtonCustom from '@/components/common/buttons/ButtonCustom'
import TicketIcon from '@/components/common/icons/TicketIcon'

const TicketTwo = () => {
    return (
        <section className="ticket-section about-ticket pt-50 pt-lg-100 pt-xxl-130 mb-4">
            <div className="container">
                <div className="ticket-wrapper position-relative parallax">
                    <div className="ticket-inner">
                        <h2 className="display-3 text-gradient no-stroke fw-extra-bold custom-jakarta mb-20">
                            Early Bird Tickets Available!
                        </h2>
                        <h3 className="custom-jakarta ticket-text fw-semibold">Don't miss this extraordinary celebration of music and create memories that will last a lifetime.</h3>
                       
                        <ButtonCustom className={"gap-2 mt-4 mt-lg-40 btn-gradient"} link={"/events"}>
                            <TicketIcon />
                            Get Ticket
                        </ButtonCustom>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TicketTwo