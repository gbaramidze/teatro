import React from 'react'
import '@/assets/css/animate.css'
import '@/assets/scss/style.scss'
import logo from "./favicon.ico"
import LayoutChildren from '@/lib/layoutChildren'
import {Open_Sans, Plus_Jakarta_Sans, Poppins, Roboto} from "next/font/google"
import {SWRConfig} from "swr";
import {NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {getLocale, getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'

export async function generateMetadata() {
  const locale = await getLocale();

  const description = locale === 'en'
    ? 'Teatro is a night club in Batumi. Show ballet, world-class DJs, live music, and many other events await you. Join us for an unforgettable nightlife experience!'
    : locale === 'ru'
      ? 'Театро - это ночной клуб в Батуми. Шоу-балет, мировые диджеи, живая музыка и множество других мероприятий. С нами вас ждет незабываемая ночная жизнь!'
      : 'თეატრო არის ღამის კლუბი ბათუმში. შოუ ბალეტი, მსოფლიო დიჯეები, ცოცხალი მუსიკა და სხვა მრავალი ღონისძიება. ჩვენთან ერთად თქვენ გელით დაუვიწყარი ღამის ცხოვრება!';
  const keywords = locale === 'en'
    ? 'Teatro, Batumi, Georgia, lounge, night club, live music, DJ performances, nightlife, events, entertainment'
    : locale === 'ru'
      ? 'Театро, Батуми, Грузия, лаунж, ночной клуб, живая музыка, выступления диджеев, ночная жизнь, мероприятия, развлечения'
      : 'Teatro, ბათუმი, საქართველო, ლაუნჯი, ღამის კლუბი, ცოცხალი მუსიკა, დიჯეის შესრულებები, ღამის ცხოვრება, ღონისძიებები, გასართობი';
  return {
    title: 'Teatro',
    description,
    keywords,
    icons: {
      icon: `${logo.src}`,
    },
  }
}

export const viewport = {
  themeColor: '#25211f',
}

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--family-style-1',
  adjustFontFallback: false
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--family-style-4',
  adjustFontFallback: false
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  variable: '--family-style-3',
  adjustFontFallback: false
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--family-style-2',
  adjustFontFallback: false
})

export default async function RootLayout({children, params}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}
          className={`${open_sans.variable} ${plus_jakarta_sans.variable} ${poppins.variable} ${roboto.variable} `}>
    <meta name="apple-mobile-web-app-title" content="Teatro"/>
    <GoogleTagManager gtmId="G-3Q2DTX49VS"/>
    <GoogleAnalytics gaId="G-3Q2DTX49VS"/>

    <body suppressHydrationWarning={true}>
    <NextIntlClientProvider locale={locale || "en"} messages={messages}>
      <LayoutChildren>
        <SWRConfig
          value={{
            refreshInterval: 5000,
          }}
        >
          {children}
        </SWRConfig>
      </LayoutChildren>
    </NextIntlClientProvider>
    </body>
    </html>
  )
}
