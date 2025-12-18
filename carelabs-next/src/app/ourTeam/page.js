import OurTeamConverstation from "@/components/OurTeams/OurTeamConverstation";
import OurTeamGallery from "@/components/OurTeams/OurTeamGallery";
import OurTeamMilestone from "@/components/OurTeams/OurTeamMilestone";
import OurTeamPartner from "@/components/OurTeams/OurTeamPartner";
import OurTeamRecognitions from "@/components/OurTeams/OurTeamRecognitions";
import OurTeamsAction from "@/components/OurTeams/OurTeamsAction";
import OurTeamsBanner from "@/components/OurTeams/OurTeamsBanner";
import OurTeamsDrivesUs from "@/components/OurTeams/OurTeamsDrivesUs";
import OurTeamsSnapshot from "@/components/OurTeams/OurTeamsSnapshot";
import OurTeamsWrkProjcet from "@/components/OurTeams/OurTeamsWrkProjcet";
import OurTeamsWrkTogether from "@/components/OurTeams/OurTeamsWrkTogether";
import OurTeamWorkWith from "@/components/OurTeams/OurTeamWorkWith";

import { GET_OURTEAM_PAGE } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";


const getOurTeamPageData = async () => {
  const res = await client.query({
    query: GET_OURTEAM_PAGE,
  });

  return res.data.ourTeamPage;
};


export async function generateMetadata() {
  const data = await getOurTeamPageData();
  const seo = data?.ourteam_page_seo;

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords || undefined,
    robots: seo.metaRobots || undefined,

    alternates: {
      canonical: seo.canonicalURL || undefined,
    },

    openGraph: {
      title: seo.openGraph?.ogTitle || seo.metaTitle,
      description:
        seo.openGraph?.ogDescription || seo.metaDescription,
      url: seo.openGraph?.ogUrl || undefined,
      type: seo.openGraph?.ogType || "website",
      images: seo.openGraph?.ogImage?.url
        ? [
            {
              url: seo.openGraph.ogImage.url,
            },
          ]
        : undefined,
    },

    viewport: seo.metaViewport || undefined,
  };
}


const Page = async () => {
  const data = await getOurTeamPageData();

  return (
    <div>
      <section>
        <OurTeamsBanner data={data} />
      </section>

      <section>
        <OurTeamsSnapshot data={data.snapshot} />
      </section>

      <section>
        <OurTeamsDrivesUs data={data.Drives_Us} />
      </section>

      <section>
        <OurTeamsWrkTogether data={data.Work_Together} />
      </section>

      <section>
        <OurTeamsWrkProjcet data={data.Guiding} />
      </section>

      <section>
        <OurTeamsAction data={data.Teams_in_Action} />
      </section>

      <section>
        <OurTeamPartner data={data.How_We_Partner} />
      </section>

      <section>
        <OurTeamMilestone data={data.Milestones} />
      </section>

      <section>
        <OurTeamGallery data={data.What_it_feels} />
      </section>

      <section>
        <OurTeamWorkWith data={data.Where_you_work} />
      </section>

      <section>
        <OurTeamRecognitions data={data.Recognitions} />
      </section>

      <section>
        <OurTeamConverstation data={data.Ready_to_Talk} />
      </section>
    </div>
  );
};

export default Page;
