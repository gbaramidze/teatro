import React from 'react'

const Loading = () => {
    return (
        <section className="loading-section py-50 py-lg-100 py-xxl-120">
            <div className="container">
                <div className="row align-items-center justify-content-around gy-40 gy-lg-0">
                    <div className="col-lg-4">
                        <h2 className="display-3 text-gradient gradient-reverse fw-bold no-stroke custom-jakarta">Designed for Swift Loading</h2>
                    </div>
                    {/* -- col-4 -- */}
                    <div className="col-lg-3">
                        <div className="loading-wrapper">
                            <p className="category mb-20">A+</p>
                            <div className="d-flex align-items-center gap-3">
                                <h2 className="loading-heading mb-0">93%</h2>
                                <h3 className="loading-desciption mb-0">Google Page Speed Score</h3>
                            </div>
                            <div className="loading-progress mt-20">
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "85%" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -- col-4 -- */}
                    <div className="col-lg-3">
                        <div className="loading-wrapper">
                            <p className="category mb-20">A+</p>
                            <div className="d-flex align-items-center gap-3">
                                <h2 className="loading-heading mb-0">95%</h2>
                                <h3 className="loading-desciption mb-0">GT Metrix Score</h3>
                            </div>
                            <div className="loading-progress mt-20">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-2" style={{ width: "90%" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -- col-4 -- */}
                </div>
            </div>
        </section>
    )
}

export default Loading