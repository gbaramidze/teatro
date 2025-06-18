import Image from 'next/image'
import React from 'react'

const ShopCard = ({img, price, link, name}) => {
    return (
        <div className="merchandise-wrapper">
            <div className="merchandise-image mb-4">
                <Image src={img} width={270} height={250}  alt="img" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="product-information">
                    <h5>{name.length > 10 ? name.slice(0, 10)+'...':name}</h5>
                    <h6 className="text-primary fw-bold">${price}</h6>
                </div>
                <div>
                    <a href="#" className="btn btn-outline-primary btn-custom-dark" aria-label="buttons">Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default ShopCard