
import React from 'react'
import demo_1 from "@/assets/images/global/demo-1.jpg"
import demo_2 from "@/assets/images/global/demo-2.jpg"
import demo_3 from "@/assets/images/global/demo-3.jpg"
import demo_4 from "@/assets/images/global/demo-4.jpg"
import demo_5 from "@/assets/images/global/demo-5.jpg"
import demo_6 from "@/assets/images/global/demo-6.jpg"
import demo_7 from "@/assets/images/global/demo-7.jpg"
import demo_8 from "@/assets/images/global/demo-8.jpg"
import demo_rtl from "@/assets/images/global/demo-1-rtl.jpg"
import Demo_card from '@/components/preview/demos/DemoCard'

const demoData = [
    {
        id: 1,
        name: "Demo 1",
        link: "/home-1",
        img: demo_1
    },
    {
        id: 2,
        name: "Demo 2",
        link: "/home-2",
        img: demo_2
    },
    {
        id: 3,
        name: "Demo 3",
        link: "/home-3",
        img: demo_3
    },
    {
        id: 4,
        name: "Demo 4",
        link: "/home-4",
        img: demo_4
    },
    {
        id: 5,
        name: "Demo 5",
        link: "/home-5",
        img: demo_5
    },
    {
        id: 6,
        name: "Demo 6",
        link: "/home-6",
        img: demo_6
    },
    {
        id: 7,
        name: "Demo 7",
        link: "/home-7",
        img: demo_7
    },
    {
        id: 8,
        name: "Demo 8",
        link: "/home-8",
        img: demo_8
    },
    {
        id: 9,
        name: "Demo RTL",
        link: "https://Teatronextjs-rtl.themeperch.net/",
        img: demo_rtl
    },
]
const Demos = () => {
    return (
        <section id="demos" className="demos pb-50 pb-lg-100 text-center">
            <div className="container">
                {/* -- SECTION TITLE --	*/}
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center mb-40 mb-lg-60">
                        <h2 className="display-3 text-gradient gradient-reverse fw-bold no-stroke custom-jakarta">Stylish & Flexible Layouts</h2>
                    </div>
                </div>

                {/* -- DEMOS WRAPPER --	 */}
                <div className="row g-40 justify-content-center">
                    {demoData.map(({ id, img, name, link }) => <Demo_card key={id} img={img} name={name} link={link} id={id} />)}
                </div>	{/*-- END DEMOS WRAPPER --*/}

            </div>	  {/*-- End container --*/}
        </section>
    )
}

export default Demos