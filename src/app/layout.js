import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Teatro - Coming Soon",
  description: "Nightlife Experience Coming Soon! Get Ready to Experience the Night! Opening June 20, 2025. Join us for an unforgettable journey into the world of nightlife. Stay tuned for updates and sneak peeks of what we have in store. Follow us on social media for the latest news and announcements. We can't wait to welcome you to Teatro!",
};

export const viewport = {
  themeColor: '#25211f',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Teatro" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="theme-color"
          content="#25211f"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
