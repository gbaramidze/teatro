import React from 'react'
import CheckIcon from '../icons/CheckIcon'
import ButtonOutline from '../buttons/ButtonOutline'
import ButtonCustom from '../buttons/ButtonCustom'

const PricingCard = ({ id, icon, price, card_name, features, link, styleNum2 }) => {

    // styleNum 0 from Home page 1 and Home page 2
    // styleNum 1 from Home page 3 and Home page 4
    // styleNum 2 from Home page 6

    let priceClass;
    let isBtnOutline;
    let featureClass;
    let cardNameClass;
    let prantClass;
    
    switch (styleNum2) {
        case 0:
            priceClass = "primary-text-shadow";
            isBtnOutline = false
            break;
        case 1:
            isBtnOutline = true;
            priceClass = "custom-jakarta text-primary";
            cardNameClass = "custom-sans-serif fw-bold";
            featureClass = "custom-sans-serif"
            break;
        case 2:
            isBtnOutline = true;
            priceClass = "custom-jakarta text-primary";
            prantClass = "bg-ticket-style-2"
            break;
        default:
            break;
    }

    // ----- Change classname define in home page


    return (
        <div className={`pricing-wrapper bg-ticket ${prantClass} position-relative`}>
            <div className="pricing-top-content">
                <div className="pricing-icon mb-10">
                    {icon}
                </div>
                <h3 className={`fw-semibold pricing-title ${cardNameClass}`}>{card_name}</h3>
                <h3 className="mb-40">
                    <span className={`display-2 fw-extra-bold  me-10 ${priceClass}`}>{price}</span><span className="fw-semibold pricing-subtitle">/ Person</span>
                </h3>
                <ul className="pricing-list list-unstyled d-flex flex-column gap-10">
                    {
                        features.map(({ id, feature_name }) => {
                            return (
                                <li key={id} className={`mb-0 ${featureClass}`}>
                                    <CheckIcon />
                                    {feature_name}
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            <div className="pricing-separator">
                <svg viewBox="0 0 420 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3632_1203)">
                        <g clipPath="url(#clip1_3632_1203)">
                            <path d="M30 -418H390C406.016 -418 419 -405.016 419 -389V8.63272C419 16.9435 414.514 24.6071 407.267 28.6754C390.261 38.222 390.261 62.702 407.267 72.2486C414.514 76.3169 419 83.9804 419 92.2912V190C419 206.016 406.016 219 390 219H30C13.9838 219 1 206.016 1 190V92.9604C1 84.3293 5.89026 76.4435 13.6218 72.607C31.9323 63.5211 31.9323 37.4029 13.6218 28.317C5.89026 24.4804 1 16.5946 1 7.9635V-389C1 -405.016 13.9837 -418 30 -418Z" strokeWidth="2" />
                            <line x1="28" y1="49" x2="394" y2="49" strokeWidth="2" strokeDasharray="10 10" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_3632_1203">
                            <rect width="420" height="100" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_3632_1203">
                            <rect width="420" height="616" fill="white" transform="translate(0 -419)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className="pricing-bottom-content position-relative">
                {
                    isBtnOutline ?
                        <ButtonOutline link={link} className={`${id === 1 ? "btn-primary" : "btn-outline-primary"}`}>Buy Now</ButtonOutline>
                        :
                        < ButtonCustom link={link} className={`${id === 1 ? "btn-gradient" : "btn-outline-gradient"}`}>Buy Now</ButtonCustom>
                }
            </div>
        </div >
    )
}

export default PricingCard