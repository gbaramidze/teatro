import Image from 'next/image'
import React from 'react'

import color_customise_img from "./assets/images/color-customise.png"
import dark_light from "./assets/images/dark_light.png"
import navbar_logo_import from "./assets/images/navbar_logo_import.png"
import navbar_logo from "./assets/images/navbar_logo.png"
import call_component from "./assets/images/call_component.png"
import faq_component from "./assets/images/faq_component.png"
import faq_component_1 from "./assets/images/faq_component_1.png"
import static_data from "./assets/images/static_data.png"
import footer_logo from "./assets/images/footer_logo.png"
import footer_logo_2 from "./assets/images/footer_logo_2.png"
import npm_i from "./assets/images/npm_i.png"
import npm_run from "./assets/images/npm_run.png"
import npm_build from "./assets/images/npm_build.png"
import npx_out from "./assets/images/npx_out.png"
import root_layout from "./assets/images/root_layout.png"
import child_layout from "./assets/images/child_layout.png"
import server_data_call_folder from "./assets/images/server_data_call_folder.png"
import server_component_data from "./assets/images/server_component_data.png"
import server_component_data_1 from "./assets/images/server_component_data_1.png"
import client_component_data from "./assets/images/client_component_data.png"
import product_call from "./assets/images/product_call.png"
import product_call_component from "./assets/images/product_call_component.png"
import logo_light from "@/assets/images/global/logo-secondary.png"

const Documentation = () => {
    return (
        <section className="documentation">
            <div className="container">
                <div className="pt-4 p-lg-5">

                    <div className="d-flex justify-content-between   mb-4">
                        <Image src={logo_light} />
                        <p className="d-inline-block fs-3 text-decoration-none fw-bold  ">Teatro Documentation</p>
                        <a href="https://Teatronextjs.themeperch.net/" target='_blank' className="d-inline-block  btn  btn-light-style-2 d-inline-flex btn-rounded align-items-center bg-black  text-white  gap-10">Live preview</a>
                    </div>

                    <div className="py-4">
                        <h4 className="fw-semibold">Introduction :-</h4>
                        <h5>Teatro is an event-related Next.js template is a pre-designed structure or layout coded in Next.js that is specifically tailored for creating web pages related to events such as conferences, concerts, weddings, parties, seminars, workshops, and more. These templates provide a foundation for web developers and designers to easily create event-related websites with a visually appealing and functional design. Below is an itemized description of what you might typically find in an event-related Next.js template.</h5>
                    </div>


                    <div className="py-4">
                        <h4 className="fw-semibold">Features :-</h4>
                        <ol className="usage d-grid gap-3">
                            <li>
                                <span className="fw-bold">Responsive Design :</span> The template is fully responsive, ensuring your website looks great on all devices and screen sizes.
                            </li>
                            <li>
                                <span className="fw-bold">Modern and Stylish Layout :</span> The template features a contemporary design with a focus on aesthetics and user experience.
                            </li>
                            <li>
                                <span className="fw-bold">Flexible Grid System :</span>  The template is built on a flexible grid system, allowing you to create unique and dynamic layouts.
                            </li>

                            <li>
                                <span className="fw-bold">Smooth Animations :</span> Add subtle animations and transitions to enhance the user experience and make your website more engaging.
                            </li>

                            <li>
                                <span className="fw-bold">Clean and Well-Structured Code :</span> The template is developed using clean Next.js, Bootstrap and SCSS code, making it easy to customize and maintain.
                            </li>

                            <li>
                                <span className="fw-bold">Integrated Contact Form :</span> A ready-to-use contact form is included, allowing visitors to get in touch with you easily.
                            </li>
                            <li>
                                <span className="fw-bold">Countdown Timer :</span> A countdown timer to build excitement for the event and remind visitors of the date.
                            </li>
                            <li>
                                <span className="fw-bold">Sponsors and Partners:</span> Logos and links to event sponsors or partners.
                            </li>
                            <li>
                                <span className="fw-bold">About Event Section :</span>
                                <ul>
                                    <li>
                                        Event Title: The name of the event.
                                    </li>
                                    <li>
                                        Date and Time: Information about the event's date, time, and duration.
                                    </li>
                                    <li>
                                        Location: Venue details, including address and map.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="fw-bold">Event Schedule :</span>
                                <ul>
                                    <li>
                                        Timetable: A schedule or agenda detailing event sessions, talks, or performances.
                                    </li>
                               
                                </ul>
                            </li>
                            <li>
                                <span className="fw-bold">Pricing/Booking Section :</span>
                                <ul>
                                    <li>
                                        Registration Form: A form for attendees to register for the event.
                                    </li>
                                    <li>
                                        Ticket Pricing: Information about ticket types and prices.
                                    </li>
                              
                                </ul>
                            </li>
                            <li>
                                <span className="fw-bold">Gallery/Media Section :</span>
                                <ul>
                                    <li>
                                        Images and Videos: A gallery showcasing previous editions of the event or related media.
                                    </li>
                                    <li>
                                        Testimonials: Quotes or feedback from past attendees or participants.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="fw-bold">Contact Information :</span>
                                <ul>
                                    <li>
                                        Contact Form: A way for visitors to get in touch with event organizers.
                                    </li>
                                    <li>
                                        Social Media Links: Links to social media profiles for the event.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="fw-bold">Other Features :</span>
                                <ul>
                                    <li>
                                        Countdown Timer: A visual timer counting down to the event start.
                                    </li>
                                    <li>
                                        Interactive Maps: Maps to help attendees find the venue.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>


                    <div className="py-4">
                        <h4 className="fw-semibold">Key Features :-</h4>
                        <ol className="key-features d-grid gap-3 custom-font">
                            <li>
                                Next.js-14.0.4
                            </li>
                            <li>
                                Bootstap v-5.3
                            </li>
                            <li>
                                Multi Header Design with Sticky Headers
                            </li>
                            <li>
                                Well Organised SCSS Structure
                            </li>
                            <li>
                                SEO Optimized
                            </li>
                            <li>
                                Easy to Customised
                            </li>
                            <li>
                                Elite Support
                            </li>
                        </ol>
                    </div>
                    <div className='row py-4'>
                        <div className='col-md-2 shadow-sm  '>
                            <ul className="nav d-flex flex-column  position-sticky  top-0">
                                <li className='mb-2'><a href="#install" className='text-decoration-none mb-3 mt-2 d-inline-block'>Install</a></li>
                                <li className='mb-2'><a href="#layout" className='text-decoration-none mb-3 d-inline-block  '>Layout</a></li>
                                <li className='mb-2'><a href="#color" className='text-decoration-none mb-3 d-inline-block  '>Color</a></li>
                                <li className='mb-2'><a href="#mode" className='text-decoration-none mb-3 d-inline-block  '>Dark Light </a></li>
                                <li className='mb-2'><a href="#components" className='text-decoration-none mb-3 d-inline-block  '>Components </a></li>
                                <li><a href="#fetching" className='text-decoration-none mb-3 d-inline-block  '>Data Fetching </a></li>
                            </ul>
                        </div>

                        <div className='col-md-10'>
                            <div className="">
                                <h4 className="fw-semibold">Customized Components :-</h4>
                                <ol className="usage d-grid gap-4">
                                    <li id='install'>
                                        <span className="fw-bold fs-4">Install and Build :</span>
                                        First, open your command line or terminal then type on your kyboard
                                        <ul className='mb-2'>
                                            <li>'npm i' to install</li>
                                            <li>'npm run dev' run the project in developer mode</li>
                                            <li>'npm run build' to build the project</li>
                                            <li>'npx serve@latest out' to run the build project</li>
                                        </ul>

                                        <div>
                                            <Image src={npm_i} className="img-fluid" alt="img" />
                                            <br />
                                            <Image src={npm_run} className="img-fluid" alt="img" />
                                            <br />
                                            <Image src={npm_build} className="img-fluid" alt="img" />
                                            <br />
                                            <Image src={npx_out} className="img-fluid" alt="img" />
                                        </div>
                                        <div className='mt-3'>
                                            <span className='fw-bold'>Usages Package:</span>
                                            <ul >
                                                <li><a href='https://www.npmjs.com/package/swiper' target='_blank'>Swiper Slider </a> </li>
                                                <li><a href='https://www.npmjs.com/package/react-leaflet' target='_blank'>Leaflet Maps </a> </li>
                                                <li><a href='https://www.npmjs.com/package/leaflet-routing-machine' target='_blank'>Leaflet Routing Machine </a> </li>
                                                <li><a href='https://www.npmjs.com/package/framer-motion' target='_blank'>Framer-motion </a> </li>
                                                <li><a href='https://www.npmjs.com/package/react-fast-marquee' target='_blank'>React Fast Marquee</a> </li>
                                                <li><a href='https://www.npmjs.com/package/react-slot-counter/v/1.9.0' target='_blank'>React Slot Counter</a> </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li id='layout'>
                                        <span className="fw-bold fs-4">Change Layout :</span> Easily change the header and footer by root layout or page layout.
                                        <div className='mt-2'>
                                            <p className='mb-0'>If you need same header and footer the full site or maximum page then you add the header and footer in the root layout</p>
                                            <div>
                                                <Image src={root_layout} className="img-fluid" alt="img" />
                                            </div>
                                        </div>

                                        <div className='mt-4'>
                                            <p className='mb-0'>If you need a different header and footer on a different page then you add the header and footer in the child layout.</p>
                                            <div>
                                                <Image src={child_layout} className="img-fluid" alt="img" />
                                            </div>
                                        </div>
                                    </li>
                                    <li id='color'>
                                        <span className="fw-bold fs-4">Customizable Color Scheme :</span> Easily change the color scheme to match your brand or personal preference.
                                        <div>
                                            <Image src={color_customise_img} className="img-fluid" alt="img" />
                                        </div>
                                    </li>
                                    <li id='mode'>
                                        <span className="fw-bold fs-4">Switch desired dark-light mode :</span> At first, you go context API component. We already handled it manually, if you want to handle dark and light modes with button clicks you can do so
                                        <div>
                                            <Image src={dark_light} className="img-fluid" alt="img" />
                                        </div>
                                    </li>
                                    <li id='components'>
                                        <span className="fw-bold fs-4">Reusable components :</span> If you change the reusable component style then you go to that page this page calls the component and passes a number in the props form that the specified element style will be added when the props number matches the switch catch condition in the compnet.
                                        <div>
                                            <Image src={call_component} className="img-fluid" alt="img" />
                                            <br />
                                            <Image src={faq_component} className="img-fluid" alt="img" />
                                            <br />
                                            <Image src={faq_component_1} className="img-fluid" alt="img" />
                                        </div>
                                    </li>
                                    <li id='fetching'>
                                        <span className="fw-bold fs-4">Data fetching :</span>
                                        <ul>
                                            <li className='mt-1'>
                                                <span className="fw-bold">Server side fetching </span>
                                                when you use a server component and you want to fetch data in this case you first create an async function and call the API in this function. Then call this function of your server component now you need to convert your server component to an async function. The width and height of the image should be given during dynamic data fetching.
                                                <div>
                                                    <Image src={server_data_call_folder} className="img-fluid" alt="img" />
                                                    <br />
                                                    <Image src={server_component_data} className="img-fluid" alt="img" />
                                                    <br />
                                                    <Image src={product_call} className="img-fluid" alt="img" />
                                                    <br />
                                                    <Image src={server_component_data_1} className="img-fluid" alt="img" />
                                                    <br />
                                                    <Image src={product_call_component} className="img-fluid" alt="img" />

                                                </div>
                                            </li>
                                            <li className='mt-4'>
                                                <span className="fw-bold">Client Side fetching </span>
                                                When you use a client component and you want to fetch data in this case you use useEffect hooks to call the API in this hook.
                                                <div>
                                                    <Image src={client_component_data} className="img-fluid" alt="img" />
                                                </div>
                                            </li>
                                            <li className='mt-4'>
                                                <span className="fw-bold">Static Data fetching </span>
                                                I have stored the maximum data in the lib folder under a different file and then called the file in the specific component.
                                                <div>
                                                    <Image src={static_data} className="img-fluid" alt="img" />
                                                </div>
                                            </li>
                                        </ul>

                                    </li>
                                    {/* <li>
                                        <span className="fw-bold">Header Logo :</span> Customise or Change Header-Logo
                                        <div>
                                            <Image src={navbar_logo_import} className="img-fluid" alt="img" />
                                            <Image src={navbar_logo} className="img-fluid" alt="img" />
                                        </div>
                                    </li>
                                    <li>
                                        <span className="fw-bold">Footer Logo :</span> Customise or Change Footer-Logo
                                        <Image src={footer_logo} className="img-fluid" alt="img" />
                                        <Image src={footer_logo_2} className="img-fluid" alt="img" />
                                    </li> */}
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="py-4">
                        <h5>
                            Creating a well-documented and feature-rich Next.js template for music events can help event organizers and web developers quickly set up appealing event websites that effectively promote the event and provide essential information to attendees.
                        </h5>
                        <h6 className='fs-5 mt-3'> <span className='support fs-5 d-inline-block  '>*</span> If you have any further questions don't hesitate to get in touch with our <a href='https://themeforest.net/user/themeperch' className='support'>support</a> team  </h6>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Documentation
