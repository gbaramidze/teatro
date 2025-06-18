// "use client"
import React from 'react'
import AboutCard from '../common/cards/AboutCard'
import ButtonCustom from '../common/buttons/ButtonCustom'
import TicketIcon from '../common/icons/TicketIcon'
import {BsWhatsapp} from "react-icons/bs";
import {Button} from "react-bootstrap";

const AboutOne = () => {
    return (
        <section className="about-section about-1 pt-50 pt-lg-100 pt-xxl-150">
            <div className="container">
                <div className="row gy-50 gy-lg-0 gx-80 justify-content-lg-between align-items-lg-center">
                    <div className="col-lg-6">
                        <div className="wow fadeInRight">
                            <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
                                <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">Teatro</h3>
                            </div>
                            {/* -- section-title -- */}
                            <h1 className="display-5 custom-jakarta fw-extra-bold mb-0">
                                Where music and magic unite for unforgettable experiences
                            </h1>
                            <Button size="lg" className={"gap-2 btn-gradient mt-4 mt-lg-40 mt-xxl-60"} target={"_blank"} href={"https://wa.me/+995598254444"}>
                                <BsWhatsapp /> Chat with us
                            </Button>
                        </div>
                    </div>
                    {/* -- col-5 -- */}
                    <div className="col-lg-6">
                        <AboutCard />
                        {/* -- about-content-wrapper -- */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOne