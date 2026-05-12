import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio"),
  title: {
    default: "Vargav Mishra | Full Stack Developer | AI SaaS & API Engineer",
    template: "%s | Vargav Mishra"
  },
  description:
    "Portfolio of Vargav Mishra, a Full Stack Developer specializing in React, Next.js, Node.js, FastAPI, AI SaaS, and scalable backend architecture.",
  keywords: [
    "Full Stack Developer",
    "FastAPI Developer",
    "AI SaaS Developer",
    "Java Backend Developer",
    "MERN Stack Developer",
    "API Developer",
    "Software Engineer",
    "Vargav Mishra",
    "React Developer",
    "Next.js Developer"
  ],
  authors: [{ name: "Vargav Mishra" }],
  creator: "Vargav Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio",
    title: "Vargav Mishra | Full Stack Developer",
    description: "Portfolio of Vargav Mishra, a Full Stack Developer specializing in React, Next.js, Node.js, FastAPI, AI SaaS, and scalable backend architecture.",
    siteName: "Vargav Mishra Portfolio",
    images: [
      {
        url: "/profilevargav.png",
        width: 1200,
        height: 630,
        alt: "Vargav Mishra - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vargav Mishra | Full Stack Developer",
    description: "Portfolio of Vargav Mishra, a Full Stack Developer specializing in React, Next.js, Node.js, FastAPI, AI SaaS, and scalable backend architecture.",
    images: ["/profilevargav.png"],
  },
  alternates: {
    canonical: "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
