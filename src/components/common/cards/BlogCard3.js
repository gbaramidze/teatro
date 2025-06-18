import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import TopUpArrow from '../icons/TopUpArrow'
import Calendar from '../icons/Calendar'

import gallery_img_3 from "@/assets/images/gallery-3.jpg"
import author_6 from "@/assets/images/blog-author-image-6.png"
const BlogCard3 = () => {
    return (
        <div className="blog-content-2 custom-inner-bg">
            <div className="row justify-content-between g-5 align-items-center">
                <div className="col-lg-7">
                    <div className="blog-image">
                        <Image src={gallery_img_3} className="img-fluid" alt="img" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="blog-left-content">
                        <h2 className="blog-link fs-4 fw-bold"><Link className="text-decoration-none" href="/blog-single-1">Unveils Star-Studded Lineup for Epic Comeback Event!</Link></h2>
                        <p className="pt-3 pt-lg-4">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between py-20 py-lg-30">
                        <div className="d-flex align-items-center gap-10">
                            <Image src={author_6} className="blog-author-image" alt="img" />
                            <p className="card-text fs-5 fw-semibold mb-0">Luna Echo</p>
                        </div>
                        <p className="mb-0"><span className="calendar me-10"><Calendar /></span>09 Aug 2023</p>
                    </div>
                    <div>

                        <Link href="/blog-single-1" className="download-link d-flex align-items-center gap-30" aria-label="buttons">
                            Read more<TopUpArrow height={"32"} width={"32"} className={"ticket-arrow"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard3