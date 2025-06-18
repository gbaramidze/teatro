import React from 'react'
import about_us from "@/assets/images/global/about-us.jpg"
import contact_us from "@/assets/images/global/contact-us.jpg"
import Blog from "@/assets/images/global/Blog.jpg"
import blog_1 from "@/assets/images/global/blog-1.jpg"
import blog_2 from "@/assets/images/global/blog-2.jpg"
import blog_3 from "@/assets/images/global/blog-3.jpg"
import Demo_card from '@/components/preview/demos/DemoCard'
const innerData = [
    {
        id: 1,
        name: "About Us",
        link: "/about-us",
        img: about_us
    },
    {
        id: 2,
        name: "Contact-Us",
        link: "/contact-us",
        img: contact_us
    },
    {
        id: 3,
        name: "Blog",
        link: "/blog",
        img: Blog
    },
    {
        id: 4,
        name: "Blog Single 1",
        link: "/blog-single-1",
        img: blog_1
    },
    {
        id: 5,
        name: "Blog Single 2",
        link: "/blog-single-2",
        img: blog_2
    },
    {
        id: 6,
        name: "Blog Single 3",
        link: "/blog-single-3",
        img: blog_3
    },
]
const InnerPages = () => {
    return (
        <section id="inner-pages" className="demos pb-50 pb-lg-100 text-center">
            <div className="container">

                {/* -- SECTION TITLE --	 */}
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center mb-40 mb-lg-60">
                        <h2 className="display-3 text-gradient gradient-reverse fw-bold no-stroke custom-jakarta">Some Inner-Pages</h2>
                    </div>
                </div>

                {/* -- DEMOS WRAPPER --	 */}

                <div className="row g-40 justify-content-center">


                    {innerData.map(({ id, img, link, name }) => <Demo_card key={id} img={img} link={link} name={name} id={id} />)}



                </div>

            </div>	  {/*<!-- End container -->*/}
        </section>
    )
}

export default InnerPages