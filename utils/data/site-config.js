export const siteConfig = {
  name: "Vargav Mishra Portfolio",
  title: "Vargav Mishra | Full Stack Developer | AI SaaS & API Engineer",
  description:
    "Portfolio of Vargav Mishra, a Full Stack Developer specializing in React, Next.js, Node.js, FastAPI, AI SaaS, and scalable backend architecture.",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio").replace(/\/+$/, ""),
  locale: "en_US",
  keywords: [
    "Vargav Mishra",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "FastAPI Developer",
    "AI SaaS Developer",
    "Java Backend Developer",
    "API Developer",
    "Software Engineer",
  ],
  socialImage: "/card.png",
};

export function absoluteUrl(path = "") {
  if (!path) {
    return siteConfig.siteUrl;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
