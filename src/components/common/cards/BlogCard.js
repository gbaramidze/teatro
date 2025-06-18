import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import TopUpArrow from '../icons/TopUpArrow'
import Calendar from '../icons/Calendar'

const BlogCard = ({ img, date, title, desc, link, blogPage, author_img, parentClass }) => {
    return (
        <div className="blog-content">
            <div className={parentClass}>
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col-12">
                        <div className="blog-image">
                            <Image src={img} className="img-fluid" alt="img" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="blog-left-content">
                            {/* If page blog.js are load than show true condation */}
                            {
                                blogPage ?
                                    <div className="d-flex align-items-center justify-content-between py-20 py-lg-30">
                                        <div className="d-flex align-items-center gap-10">
                                            <Image src={author_img} className="blog-author-image" alt="img" />
                                            <p className="card-text fs-5 fw-semibold mb-0">Electra Nova</p>
                                        </div>
                                        <p className='mb-0'><span className="calendar me-10"><Calendar /></span>{date}</p>
                                    </div>
                                    :
                                    <p><span className="calendar me-10"><Calendar /></span>{date}</p>
                            }

                            <h2 className="blog-link fs-4 fw-bold"><Link className="text-decoration-none" href={`/${link}`}>{title}</Link></h2>
                            <p className="py-20 mb-3 mb-lg-0">{desc}</p>
                            <div>
                                <Link href={`/${link}`} className="download-link d-flex align-items-center gap-30" aria-label="buttons">
                                    Read more <TopUpArrow className={"ticket-arrow"} height={"32"} width={"32"} />
                                </Link>
                            </div>
                        </div>
                        {/* -- left-content -- */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard