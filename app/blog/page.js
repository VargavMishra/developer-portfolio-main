// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { contactsData } from "@/utils/data/contactsData";
import { absoluteUrl, siteConfig } from "@/utils/data/site-config";
import BlogCard from "../components/homepage/blog/blog-card";

export const revalidate = 3600;

export const metadata = {
  title: "Blog",
  description: `Technical articles, development notes, and engineering insights from ${personalData.name}.`,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    title: `Blog | ${personalData.name}`,
    description: `Technical articles, development notes, and engineering insights from ${personalData.name}.`,
    images: [
      {
        url: absoluteUrl(siteConfig.socialImage),
        width: 1682,
        height: 722,
        alt: `Blog preview for ${personalData.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${personalData.name}`,
    description: `Technical articles, development notes, and engineering insights from ${personalData.name}.`,
    images: [absoluteUrl(siteConfig.socialImage)],
  },
};

async function getBlogs() {
  try {
    const res = await fetch(`https://dev.to/api/articles?per_page=30`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    const shuffled = data.sort(() => 0.5 - Math.random());
    return Array.isArray(shuffled) ? shuffled : [];
  } catch {
    return [];
  }
};

async function BlogPage() {
  const blogs = await getBlogs();
  const visibleBlogs = blogs.filter((blog) => blog?.cover_image);
  const description = `Technical articles, development notes, and engineering insights from ${personalData.name}.`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/blog#webpage"),
        "url": absoluteUrl("/blog"),
        "name": `Blog | ${personalData.name}`,
        "description": description,
        "isPartOf": {
          "@id": absoluteUrl("/#website")
        },
        "about": {
          "@id": absoluteUrl("/#person")
        },
        "breadcrumb": {
          "@id": absoluteUrl("/blog#breadcrumb")
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/blog#breadcrumb"),
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": absoluteUrl("/blog")
          }
        ]
      },
      ...visibleBlogs.slice(0, 10).map((blog) => ({
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.cover_image,
        "url": blog.url,
        "mainEntityOfPage": blog.url,
        "datePublished": blog.published_at,
        "timeRequired": `PT${blog.reading_time_minutes || 1}M`,
        "author": {
          "@id": absoluteUrl("/#person")
        },
        "publisher": {
          "@type": "Organization",
          "name": "DEV Community"
        }
      }))
    ]
  };

  return (
    <section className="py-8" aria-labelledby="blog-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h1 id="blog-heading" className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blogs
          </h1>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          visibleBlogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </section>
  );
};

export default BlogPage;
