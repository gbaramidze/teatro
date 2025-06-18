import React from 'react'

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section pricing-landing">
				<div className="container">
					<div className="pricing-landing-wrapper landing-inner-bg px-20 px-lg-50 pt-40 pt-lg-90 pb-3 pb-lg-90">
						<div className="row gy-40 gy-lg-0 justify-content-between align-items-lg-center">
							<div className="col-lg-7">
								<h2 className="pricing-heading mb-0">Grab Teatro Now for Unforgettable Music Experiences!</h2>
							</div>
							{/* -- col-7 -- */}
							<div className="col-lg-4">
								{/* <h3 className="pricing-amount display-3 mb-4 mb-lg-30">$00</h3> */}
								<ul className="list-unstyled d-flex flex-column gap-3 mb-30 mb-lg-50">
									<li className="d-flex align-items-center gap-10"> <CheckIcon/> One-Time Payment</li>
									<li className="d-flex align-items-center gap-10"> <CheckIcon/> 6 Months Support</li>
									<li className="d-flex align-items-center gap-10"> <CheckIcon/> No Monthly Fees</li>
								</ul>
								<a href="https://themeforest.net/user/themeperch/portfolio" target="_blank" className="btn btn-primary btn-light-style-2 d-inline-flex btn-rounded align-items-center gap-10" aria-label="buttons">Buy Teatro</a>
								
							</div>
						</div>
						{/* -- row -- */}
					</div>
					{/* -- pricing-landing-wrapper -- */}
				</div>
			</section>
  )
}

export default Pricing


const CheckIcon = () => {
  return (
      <span className="check-circle-fill">
          <svg height={"28"} width={"28"} ><use height={"28"} width={"28"} xlinkHref="#check-circle-fill"></use>
              <symbol id="check-circle-fill" viewBox="0 0 28 28">
                  <path d="M26.5 14C26.5 20.9036 20.9036 26.5 14 26.5C7.09644 26.5 1.5 20.9036 1.5 14C1.5 7.09644 7.09644 1.5 14 1.5C20.9036 1.5 26.5 7.09644 26.5 14Z" stroke="#0DB10A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.5756 9.51003C19.9843 9.8279 20.0579 10.4169 19.74 10.8256L14.7313 17.2654C13.9516 18.2678 12.4851 18.3979 11.5412 17.5484L8.37285 14.6969C7.988 14.3505 7.9568 13.7577 8.30317 13.3729C8.64954 12.988 9.24231 12.9568 9.62716 13.3032L12.7955 16.1547C12.9304 16.2761 13.1399 16.2575 13.2512 16.1143L18.26 9.67447C18.5779 9.26577 19.1669 9.19215 19.5756 9.51003Z" fill="#0DB10A" />
              </symbol>
          </svg>
      </span>
  )
}