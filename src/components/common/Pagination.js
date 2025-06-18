import React from 'react'

const Pagination = () => {
    return (
        <div className="blog-pagination mt-30 mt-lg-70">
            <nav aria-label="Page navigation example">
                <ul className="pagination gap-2 mb-0">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination