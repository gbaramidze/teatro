 "use client"
import React from 'react'
import {BsWhatsapp} from "react-icons/bs";
import {Button, Card} from "react-bootstrap";
 import {MdEmail, MdPhone} from "react-icons/md";

const AboutOne = () => {
    return (
        <section className="about-section about-1 pt-50 pt-lg-100 pt-xxl-150">
            <div className="container">
                <div className={"row"}>
                    <div className={"col-lg-4"}>
                        <Card className={"text-center mt-4"}>
                            <Card.Body>
                                <Card.Text style={{ fontSize: 15}} className={'mt-2'}>
                                    <MdEmail size={64} className={"text-primary"} />
                                </Card.Text>
                                <Card.Title className={"fw-bold"} style={{fontSize: 33}}>contact@teatro.ge</Card.Title>
                                <Card.Subtitle>Tech support</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={"col-lg-4"}>
                        <Card className={"text-center mt-4"}>
                            <Card.Body>
                                <Card.Text style={{ fontSize: 15}} className={'mt-2'}>
                                    <MdEmail size={64} className={"text-primary"} />
                                </Card.Text>
                                <Card.Title className={"fw-bold"} style={{fontSize: 33}}>manager@teatro.ge</Card.Title>
                                <Card.Subtitle>Manager's email</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={"col-lg-4"}>
                        <Card className={"text-center mt-4"}>
                            <Card.Body>
                                <Card.Text style={{ fontSize: 15}} className={'mt-2'}>
                                    <MdPhone size={64} className={"text-primary"} />
                                </Card.Text>
                                <Card.Title className={"fw-bold"} style={{fontSize: 33}}>(+995) 598 25-44-44</Card.Title>
                                <Card.Subtitle>Phone</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div>
                    <Button size="lg" className={"gap-2 btn-gradient mt-4 mt-lg-40 mt-xxl-60"} target={"_blank"} href={"https://wa.me/+995598254444"}>
                        <BsWhatsapp /> Chat with us
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutOne