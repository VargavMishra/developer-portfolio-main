import { personalData } from "@/utils/data/personal-data";
import { projectsData } from "@/utils/data/projects-data";
import { absoluteUrl, siteConfig } from "@/utils/data/site-config";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title: "Vargav Mishra | Developer Portfolio | Full Stack Developer",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
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
};

export default function Home() {
  const sameAs = [personalData.github, personalData.linkedIn, personalData.twitter]
    .filter((url) => url && url !== "#");

  const featuredProjects = projectsData.slice(0, 4).map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      keywords: project.tools.join(", "),
      creator: {
        "@id": absoluteUrl("/#person"),
      },
      url: absoluteUrl("/#projects"),
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        "name": personalData.name,
        "url": siteConfig.siteUrl,
        "image": absoluteUrl(personalData.profile),
        "description": personalData.description,
        "sameAs": sameAs,
        "jobTitle": "Full Stack Developer",
        "email": `mailto:${personalData.email}`,
        "worksFor": {
          "@type": "Organization",
          "name": "Self-Employed"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": personalData.address,
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        "url": siteConfig.siteUrl,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": absoluteUrl("/#person")
        }
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        "url": siteConfig.siteUrl,
        "name": siteConfig.title,
        "description": siteConfig.description,
        "isPartOf": {
          "@id": absoluteUrl("/#website")
        },
        "about": {
          "@id": absoluteUrl("/#person")
        },
        "primaryImageOfPage": absoluteUrl(siteConfig.socialImage)
      },
      {
        "@type": "ItemList",
        "name": "Featured Projects",
        "itemListElement": featuredProjects
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
    <>
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
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};
