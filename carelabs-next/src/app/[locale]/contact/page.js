import client from "@/lib/appollo-client";
import { GET_CONTACT_PAGE } from "@/lib/api-Collection";
import ContactClient from "@/components/Contact/ContactClient";

/* ---------------- SEO ---------------- */
export async function generateMetadata() {
  const res = await client.query({ query: GET_CONTACT_PAGE });
  const seo = res.data.contactPage?.contact_page_seo;

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: seo.canonicalURL || undefined,
    },
    openGraph: {
      title: seo.openGraph?.ogTitle || seo.metaTitle,
      description: seo.openGraph?.ogDescription || seo.metaDescription,
      images: seo.openGraph?.ogImage?.url
        ? [{ url: seo.openGraph.ogImage.url }]
        : undefined,
    },
  };
}

/* ---------------- PAGE ---------------- */
const ContactPage = async () => {
  const res = await client.query({
    query: GET_CONTACT_PAGE,
  });
 
  // console.log("CONTACT DATA:",res.data.contactPage);
  
  return <ContactClient contactData={res.data.contactPage} />;
};

export default ContactPage;
