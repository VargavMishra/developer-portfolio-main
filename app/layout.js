import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { personalData } from "@/utils/data/personal-data";
import { absoluteUrl, siteConfig } from "@/utils/data/site-config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s | Vargav Mishra"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: personalData.name, url: personalData.linkedIn }],
  creator: personalData.name,
  publisher: personalData.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.socialImage),
        width: 1682,
        height: 722,
        alt: "Preview of Vargav Mishra portfolio website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.socialImage)],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#16f2b3] focus:px-4 focus:py-2 focus:text-[#020817]"
        >
          Skip to content
        </a>
        <ToastContainer />
        <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <header>
            <Navbar />
          </header>
          <main id="main-content">
            {children}
          </main>
          <ScrollToTop />
        </div>
        <Footer />
        {process.env.NEXT_PUBLIC_GTM ? <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> : null}
      </body>
    </html>
  );
}
