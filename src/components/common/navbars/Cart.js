import React from 'react'

const Cart = () => {
    return (
        <div className="offcanvas offcanvas-end offcanvasShop" id="offcanvasShop" data-bs-backdrop="static" tabIndex="-1">
            <div className="offcanvas-header">
                <h3 className="text-uppercase fw-bold">Cart</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex justify-content-center">
                <h2 className="fw-semibold">
                    Your Cart Is Empty
                </h2>
            </div>
        </div>
    )
}

export default Cart