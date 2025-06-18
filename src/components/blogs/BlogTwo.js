import React from 'react'
import BlogCard3 from '@/components/common/cards/BlogCard3'
import BlogCard from '@/components/common/cards/BlogCard'
import Pagination from '@/components/common/Pagination'
import { blogData } from '@/lib/blogData'

const BlogTwo = () => {
    return (
        <section className="blog-content-section py-50 py-lg-80 py-xxl-100">
            <div className="container">

                <div className="blog-wrapper">
                    <div className="blog-content mb-30 mb-md-50">
                        <BlogCard3 />
                    </div>
                    <div className="row g-4">
                        {
                            blogData.map(({ id, date, desc, img, link, title, author_img }) =>
                                <div key={id} className="col-md-6 col-xl-4">
                                    <BlogCard date={date} desc={desc} img={img} link={link} title={title} blogPage={true} author_img={author_img} parentClass={'blog-content-2 custom-inner-bg'} />
                                </div>
                            )
                        }
                    </div>
                </div>

                <Pagination />
            </div>
        </section>
    )
}

export default BlogTwo