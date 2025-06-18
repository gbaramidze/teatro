import Image from 'next/image'
import React from 'react'
import author_2 from "@/assets/images/blog-author-image-2.png"
import author_3 from "@/assets/images/blog-author-image-3.png"
const Comments = () => {
    return (
        <div className="blog-comments-wrapper">
            <h5 className="blog-inner-heading fw-semibold mb-30 mb-lg-50">
                Comments (02)
            </h5>
            <div className="d-flex gap-3 mb-30 mb-lg-40">
                <UserProfile
                    img={author_2}
                    name={"Mark Petterson"}
                    comment={"This is your chance to be part of history, to witness the magic of live music, and to create memories that will last a lifetime."}
                />
            </div>
            <div className="comment-reply d-flex gap-3">
                <UserProfile
                    img={author_3}
                    name={"James Running"}
                    comment={"Stay tuned for ticket information, behind-the-scenes exclusives, and more as we count down the days to our epic comeback event. We can't wait to see you there!"}
                />
            </div>
        </div>
    )
}

export default Comments


const UserProfile = ({ img, name, comment }) => {
    return (
        <>
            <div className="blog-author-image">
                <Image src={img} className="img-fluid" alt="img" />
            </div>
            <div className="blog-comments d-flex justify-content-between">
                <div>
                    <h4 className="fw-bold mb-20">{name}</h4>
                    <p className="mb-20">{comment}</p>
                    <h4 className="fw-bold mb-0"><a href="#" className="text-decoration-none text-primary">reply</a></h4>
                </div>
            </div>
        </>
    )
}