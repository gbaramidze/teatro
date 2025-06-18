import React from 'react'
import Image from 'next/image'

import blog_author from "@/assets/images/blog-author-image.png"
const BlogTitle = () => {
    return (
        <div className="blog-inner-content position-relative pt-40 pt-lg-0">
            <div className="d-flex gap-20 align-items-center">
                <a href="#" className="text-decoration-none mb-0 position-relative fw-semibold">Artist Spotlights <span className="dot-separator"></span></a>
                <p className="fw-semibold mb-0">4 min read</p>
            </div>
            <h2 className="blog-heading display-4 pt-4 pt-lg-30 pb-30 pb-lg-60 fw-extra-bold custom-jakarta mb-0">Unveils Star-Studded Lineup for Epic Comeback Event!</h2>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4">
                <div className="blog-author-details d-flex align-items-center gap-10">
                    <div className="blog-author-image">
                        <Image src={blog_author} className="img-fluid" alt="image" />
                    </div>
                    <div>
                        <p className="fw-medium mb-1">Author</p>
                        <h6 className="mb-0 fw-bold">Colabrio</h6>
                    </div>
                </div>
                <div className="blog-author-info d-flex gap-20 gap-lg-30">
                    <div>
                        <p className="fw-medium mb-1">Published</p>
                        <h6 className="mb-0 fw-bold">August 28, 2023</h6>
                    </div>
                    <div>
                        <p className="fw-medium mb-1">2 Comments</p>
                        <h6 className="mb-0 fw-bold">Join the Conversation</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogTitle