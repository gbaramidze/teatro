import React from 'react'
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/routing";

const PageHeader = async ({ currentPage, banner, isBlogDetails }) => {
  const t = await getTranslations('navigation');

  return (
    <section className={`banner-section ${banner} position-relative parallax`}>
      <div className="container">
        <div className="banner-wrapper d-flex gap-20 gap-lg-40 justify-content-center align-items-lg-center flex-column">
          <h2 className="banner-heading display-3 fw-extra-bold custom-jakarta mb-0">{currentPage}</h2>
          <nav aria-label="breadcrumb">
            <ol className="blog-breadcrumb breadcrumb">
              <li className="breadcrumb-item"><Link href="/">{t('home')}</Link></li>
              {
                isBlogDetails ? <>
                  <li className={`breadcrumb-item active`} ><Link href="/events" aria-current="page">{isBlogDetails}</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                </>
                  :
                  <li className={`breadcrumb-item active`} >{currentPage}</li>
              }

            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default PageHeader