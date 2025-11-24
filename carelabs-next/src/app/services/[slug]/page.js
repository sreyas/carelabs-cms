import client from "@/lib/appollo-client";
import { GET_SINGLE_SERVICE_BY_SLUG } from "@/lib/api-Collection";
import ServicesLanding from "@/components/ServicesLanding";
import EngineeringServices from "@/components/EngineeringServices";
import FaqResourcesSection from "@/components/FaqResourcesSection";
import PowerSystemAnalysisCTA from "@/components/PowerSystemAnalysisCTA";

export default async function Page({ params }) {
  const { slug } = params;

  const response = await client.query({
    query: GET_SINGLE_SERVICE_BY_SLUG,
    variables: { slug },
    fetchPolicy: "no-cache",
  });

  // const service = response?.data?.services?.data?.[0]?.attributes;
  const service = response?.data?.services?.data?.[0];

  console.log("Service from slug:", service);

  if (!service) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
        <p className="text-gray-500 mt-2">No service matches: {slug}</p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <ServicesLanding service={service} />
      </section>

      <section className="mt-10">
        <PowerSystemAnalysisCTA />
      </section>

      <section className="mt-10">
        <EngineeringServices />
      </section>

      <section className="mt-10">
        <FaqResourcesSection />
      </section>
    </div>
  );
}
