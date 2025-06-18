import Link from 'next/link'
import React from 'react'
import PreviousIcon from '@/components/common/icons/PreviousIcon'
import NextIcon from '@/components/common/icons/NextIcon'

const PostNavigation = () => {
    return (
        <div className="post-navigation my-40 my-lg-70 py-40 py-lg-70">
            <div className="d-flex flex-column flex-lg-row gap-40 justify-content-between align-items-lg-center">
                <div className="blog-prev-content">
                    <Link href="#" className="blog-inner-heading fw-semibold text-primary text-decoration-none"><span className="previous-icon me-3"> <PreviousIcon />  </span>previous</Link>
                    <h5 className="blog-inner-heading fw-semibold mt-20 mt-lg-4 mb-0">Teatro's Melodic Marvel</h5>
                </div>
                <div className="blog-next-content text-end">
                    <Link href="#" className="blog-inner-heading fw-semibold text-primary text-decoration-none">next<span className="next-icon ms-3"> <NextIcon/> </span></Link>
                    <h5 className="blog-inner-heading fw-semibold mt-20 mt-lg-4 mb-0">Teatro's Prestigious Excellence Award </h5>
                </div>
            </div>
        </div>
    )
}

export default PostNavigation