const fs = require('fs');

const API_URL = "https://proper-hug-7f40206151.strapiapp.com/api/blogs";

const TOKEN = "f4e933bdf4345428244af68bf548df195620bb34c2f398f1f82e9c5c8a64a2b4835ed8212a8e9c3b0210cebded529a1836b051a881f7684ad495defd88fc72070edaaa9945b5d237b1e3b6aa326e9a967a1941bded7d8cb30f845fc20b661ecaf501ab48fa14ccfcc4b0f1d3f7ecf962706a802094ab29728bf69c9afcb16f74";

async function seedBlogs() {
  const blogs = JSON.parse(fs.readFileSync('./scripts/blogs.json', 'utf8'));

  for (const blog of blogs) {
    const body = {
      data: {
        title: blog.title,
        slug: blog.slug,
        link: blog.link,
        pubDate: blog.pubDate,
        description: blog.description,
        content: blog.content,

        featureImage: blog.featureImage,    

        seo: {
          canonicalURL: blog.seo?.canonicalURL,
          keywords: blog.seo?.keywords,
          metaDescription: blog.seo?.metaDescription,
          metaTitle: blog.seo?.metaTitle,
          metaRobots: blog.seo?.metaRobots,
          metaViewport: blog.seo?.metaViewport,

          metaImage: {
            url: blog.seo?.metaImage?.url || null
          },

          structuredData: blog.seo?.structuredData || null,

          openGraph: {
            ogUrl: blog.seo?.openGraph?.ogUrl,
            ogType: blog.seo?.openGraph?.ogType,
            ogTitle: blog.seo?.openGraph?.ogTitle,
            ogDescription: blog.seo?.openGraph?.ogDescription,
            ogImage: {
              url: blog.seo?.openGraph?.ogImage?.url || null
            }
          }
        },
      }
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify(body)
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("❌ Failed Blog:", blog.title);
        console.error(JSON.stringify(result, null, 2));
      } else {
        console.log("✅ Created:", blog.title);
      }

    } catch (err) {
      console.error("❌ Network/Fetch Error for:", blog.title, err.message);
    }
  }
}

seedBlogs();

