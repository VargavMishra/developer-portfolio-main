import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio/#person",
        "name": "Vargav Mishra",
        "url": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio",
        "image": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio/profilevargav.png",
        "sameAs": [
          "https://github.com/VargavMishra",
          "https://www.linkedin.com/in/vargavmishra2003/"
        ],
        "jobTitle": "Full Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Self-Employed"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio/#website",
        "url": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio",
        "name": "Vargav Mishra Portfolio",
        "publisher": {
          "@id": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio/#person"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Vargav Mishra SaaS Solutions",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "author": {
          "@id": "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio/#person"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What tech stack does Vargav Mishra use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vargav Mishra uses React, Next.js, Node.js, FastAPI, Java Backend, and MERN stack for full-stack development."
            }
          },
          {
            "@type": "Question",
            "name": "Is Vargav Mishra available for freelance or full-time roles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Vargav is a Full Stack Developer open to new opportunities in AI SaaS, API engineering, and full-stack roles."
            }
          }
        ]
      }
    ]
  };

  return (
    <div suppressHydrationWarning >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  )
};