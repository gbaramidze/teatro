import React from 'react'

const LiveReply = () => {
    return (
        <div className="blog-forms pt-40 pt-lg-80 pt-xxl-100">
            <h5 className="blog-inner-heading fw-semibold mb-20">
                Leave a Reply
            </h5>
            <p className="mb-20 text-sm">Your email address will not be published. Required fields are marked *</p>
            <form action="#">
                <div className="row g-4 mb-30">
                    <div className="col-12 col-lg-6">
                        <input type="text" className="form-control" id="name" placeholder="Your Name *" required />
                    </div>
                    <div className="col-12 col-lg-6">
                        <input type="email" className="form-control" id="email" placeholder="Your email address *" required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="website" placeholder="Website" />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" placeholder="Your Comment" id="form-textarea" style={{height: "100px"}}></textarea>
                    </div>
                </div>
                <div className="text-lg-end">
                    <button className="btn btn-lg btn-primary btn-style-2 btn-rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LiveReply