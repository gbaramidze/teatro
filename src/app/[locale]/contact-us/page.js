import PageHeader from '@/components/common/PageHeader'
import Direction from '@/components/direction/Direction'
import AboutOne from "@/components/about/AboutOne";
import {getTranslations} from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations('contactPage');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `/${t('locale')}/contact-us`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: t('url'),
      siteName: t('siteName'),
      images: [
        {
          url: 'https://teatro.ge/banner.jpg',
          width: 1800,
          height: 1201,
          alt: t('title'),
        },
      ],
      type: 'website',
      locale: t('openGraph.locale'),
    },
  }
}

const ContactUs = async () => {
  const t = await getTranslations('navigation');
  return (
    <>
      <PageHeader currentPage={t('contact')} banner={"banner-1 banner-2"}/>
      <AboutOne/>
      <Direction styleNum={0}/>
    </>
  )
}

export default ContactUs