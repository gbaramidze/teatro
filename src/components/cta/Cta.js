import React from 'react'
import Link from 'next/link'
import SlotCounter from 'react-slot-counter';
import WordOpacity from '@/components/common/WordOpacity';
import {useTranslations} from "next-intl";


const Cta = ({styleNum}) => {
  const t = useTranslations();
  // styleNum 0 from home page 1 and home page 2
  // styleNum 1 from home page 3
  // styleNum 2 from home page 4
  // styleNum 3 from home page 5 and home page 7
  // styleNum 4 from home page 6


  // ----- Change classname define in home page
  let percentClass;
  let numberClass;
  let iconClr;
  let textClass;
  switch (styleNum) {
    case 0:
      percentClass = false;
      numberClass = "text-secondary";
      iconClr = "arrow-secondary";
      break;

    case 1:
      percentClass = true;
      numberClass = "text-primary custom-jakarta number_gap";
      iconClr = "arrow-secondary";
      textClass = "custom-sans-serif"
      break;

    case 2:
      percentClass = true;
      numberClass = "text-primary custom-jakarta number_gap"
      break;

    case 3:
      percentClass = false;
      numberClass = "primary-text-shadow";
      break;
    case 4:
      percentClass = true;
      numberClass = "text-primary";
      break;
    default:
      break;
  }

  return (
    <section className="cta-section cta-1 pb-50 pb-lg-80">
      <div className={` ${percentClass && "dark-wrapper-bg"}  `}>
        <div className="container">
          <div className="row gy-20 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <div className="col-lg-4">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className={`fs-180-style-2 fw-bold  ${numberClass} d-flex align-items-center gap-2 mb-0`}>
                  <SlotCounter startValue={0} value={30} debounceDelay={5000} duration={2}
                               animateOnVisible={{triggerOnce: true, rootMargin: '0px 0px -100px 0px'}}/>
                  <span className="d-flex flex-column cta-percent-off">
                                        <span className="cta-percent fw-extra-bold">%</span>
                                        <span className="cta-off fw-extra-bold">Off</span>
                                    </span>
                </h2>
                <div className="d-block d-lg-none">
                  <div className="cta-icon">
                    <Link href="/events" aria-label="icons">
                      <ArrowTopRightBig/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className={`cta-text ms-xl-n60 display-3 fw-extra-bold ${textClass}`}>
                <WordOpacity paragraph={t('cta')}/>
              </h2>
            </div>
            <div className="col-lg-3">
              <div className="cta-icon d-none d-lg-block ms-xl-70 ms-xxl-100">
                <Link href="/events" aria-label="icons">
                  <ArrowTopRightBig iconClr={iconClr}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta


const ArrowTopRightBig = ({iconClr}) => {
  return (
    <span className={`arrow-up-right-big ${iconClr}`}>
            <svg width="205" height="205">
                <use xlinkHref="#arrow-up-right-big">
                    <symbol id="arrow-up-right-big" viewBox="0 0 218 218">
                        <path
                          d="M49.6659 168.314C46.9214 165.57 46.6927 161.262 48.9798 158.257L49.6659 157.472L158.086 49.0517C161.08 46.0577 165.935 46.0577 168.929 49.0517C171.673 51.7961 171.902 56.1037 169.615 59.1086L168.929 59.8937L60.5079 168.314C57.514 171.308 52.6598 171.308 49.6659 168.314Z"
                          strokeWidth="15"/>
                        <path
                          d="M76.2513 62.3226C72.0172 62.3318 68.5774 58.9067 68.5683 54.6727C68.56 50.8235 71.3899 47.6308 75.0856 47.0752L76.2183 46.9897L163.49 46.8018C167.35 46.7934 170.548 49.6396 171.091 53.3478L171.173 54.4841L170.992 141.763C170.983 145.997 167.544 149.422 163.31 149.413C159.46 149.405 156.28 146.562 155.74 142.864L155.659 141.731L155.819 62.1509L76.2513 62.3226Z"
                          strokeWidth="15"/>
                    </symbol>
                </use>
            </svg>
        </span>
  )
}