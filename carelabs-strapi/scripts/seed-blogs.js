// @ts-nocheck
const fs = require('fs');

const API_URL = "https://inspired-gem-f09bdfaddd.strapiapp.com/api/insightblogs";

const TOKEN = "d0150e3d2832370f339ca119a116209310eab4427e0e8a25b914482af0184fbcf0f155659039c18e4bbcfc3ce2d160941f8ef9223c115a49b34b10ab254319c1042e4e4934e8ab96ce1c15550a2e2e9103fa4f4ae859bdfeb0f6f187d2c77c8f006ffc6baef3d6ba48bfe1fc1cb49107d94b791dffa7cc6799d4c47d3efad344";

function formatPublishedDate(dateStr) {
  const date = new Date(dateStr);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formatted = date.toLocaleDateString("en-GB", options);
  return `Published on: ${formatted.replace(/ /g, " ")}`;
}

async function seedBlogs() {
  const blogs = JSON.parse(fs.readFileSync('./scripts/blogs.json', 'utf8'));

  for (const blog of blogs) {

    const body = {
      data: {
        mainheading: blog.title,
        slug: blog.slug,
        description: blog.description,
        publishedOn: formatPublishedDate(blog.pubDate),
        IntroductionContent: blog.content
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