export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://vargavmishra.github.io/Vargav_Mishra_React_Portfolio/sitemap.xml",
  };
}
