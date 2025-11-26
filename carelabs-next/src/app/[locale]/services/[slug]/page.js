import client from "@/lib/appollo-client";
import { GET_SINGLE_SERVICE_BY_SLUG } from "@/lib/api-Collection";
import ServicesLanding from "@/components/ServicesLanding";
import EngineeringServices from "@/components/EngineeringServices";
import FaqResourcesSection from "@/components/FaqResourcesSection";
import PowerSystemAnalysisCTA from "@/components/PowerSystemAnalysisCTA";
import * as LucideIcons from 'lucide-react';


export default async function Page({ params }) {
  const { slug } = await params;

  const response = await client.query({
    query: GET_SINGLE_SERVICE_BY_SLUG,
    variables: { slug },
    fetchPolicy: "no-cache",
  });

  //const service = response?.data?.services?.data?.[0]?.attributes;
  const service = response?.data?.services?.[0];

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

      {/* =====================================================================================
         SECTION 1 → What It Covers (service_features)
      ===================================================================================== */}
      {/* <section>
        <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-10">
          <div className="w-full sm:w-[90%] lg:w-[70%] flex flex-wrap justify-center gap-6">

            {service?.service_features?.map((feat, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[45%] lg:w-[30%] bg-white p-6 rounded-2xl card-shadow flex flex-col gap-3"
              >
                <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }} />
                <p className="text-xl font-bold">{feat.title}</p>
                <p className="text-sm text-gray-700">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

  {/* <section>
  <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-10">
    <div className="w-full sm:w-[90%] lg:w-[70%] flex flex-wrap justify-center gap-6">

      {service?.service_features?.map((feat, idx) => (
        
        <div
          key={idx}
          className="
            w-full sm:w-[45%] lg:w-[30%] 
            bg-white p-6 rounded-2xl card-shadow flex flex-col gap-3

            transform transition-all duration-500 
            hover:scale-[1.05] hover:shadow-xl hover:-translate-y-1
          "
        >
          <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#1764e8' }} />
          <p className="text-xl font-bold">{feat.title}</p>
          <p className="text-sm text-gray-700">{feat.description}</p>
        </div>
      ))}

    </div>
  </div>
</section> */}

<section>
  <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-10">
    <div className="w-full sm:w-[90%] lg:w-[70%] flex flex-wrap justify-center gap-6">

      {service?.service_features?.map((feat, idx) => {
        const Icon = LucideIcons[feat.icon] || LucideIcons.CircleCheck; // fallback icon

        return (
          <div
            key={idx}
            className="
              w-full sm:w-[45%] lg:w-[30%] 
              bg-white p-6 rounded-2xl card-shadow flex flex-col gap-3

              transform transition-all duration-500 
              hover:scale-[1.05] hover:shadow-xl hover:-translate-y-1
            "
          >
            {/* Dynamic Icon */}
            <Icon className="w-8 h-8 text-[#1764e8]" />

            <p className="text-xl font-bold">{feat.title}</p>
            <p className="text-sm text-gray-700">{feat.description}</p>
          </div>
        );
      })}

    </div>
  </div>
</section>



      {/* =====================================================================================
         SECTION 2 → Why Matters + What Carelabs Delivers
      ===================================================================================== */}
      {/* <section>
        <div className="w-full flex justify-center px-4 py-10">
          <div className="w-full sm:w-[90%] lg:w-[75%] flex flex-col lg:flex-row gap-8">

            
            <div className="bg-white p-6 sm:p-8 rounded-2xl w-full lg:w-[45%] card-shadow flex flex-col gap-5">
              <div className="w-[50px] h-[50px] bg-red-300 rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-circle-exclamation" />
              </div>

              <p className="text-3xl font-bold">{service?.Why_Matters?.title}</p>
              <p className="text-gray-700">{service?.Why_Matters?.subtitle}</p>

              <div className="flex flex-col gap-3">
                {[service?.Why_Matters?.ans1,
                service?.Why_Matters?.ans2,
                service?.Why_Matters?.ans3,
                service?.Why_Matters?.ans4].map(
                  (item, i) =>
                    item && (
                      <div key={i} className="flex gap-2 text-sm">
                        <i className="fa-solid fa-angle-right" />
                        <p>{item}</p>
                      </div>
                    )
                )}
              </div>
            </div>

            
            <div className="bg-white p-6 sm:p-8 rounded-2xl w-full lg:w-[45%] card-shadow flex flex-col gap-5">
              <div className="w-[50px] h-[50px] bg-blue-300 rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-circle-exclamation" />
              </div>

              <p className="text-3xl font-bold">{service?.WhatsIncludedtitle}</p>
              <p className="text-gray-700">{service?.WhatsIncludedsubtitle}</p>

              <div className="flex flex-col gap-3">
                {service?.whats_include_features?.map((f, idx) => (
                  <div key={idx} className="flex gap-2 text-sm">
                    <i className="fa-regular fa-circle-check" />
                    <p>{f.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section> */}

      <section>
        <div className="w-full flex justify-center px-4 py-10">
          <div className="w-full sm:w-[90%] lg:w-[75%] flex flex-col lg:flex-row gap-8">

            {/* LEFT CARD → Why Power System Analysis Matters */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl w-full lg:w-[45%] card-shadow flex flex-col gap-5">

              <div className="w-[50px] h-[50px] bg-[#f9e0e2] rounded-xl flex justify-center items-center">
                {service?.Why_Matters?.[0]?.icon && (() => {
                  const LeftIcon = LucideIcons[service?.Why_Matters?.[0]?.icon] || LucideIcons.AlertCircle;
                  return  <LeftIcon className="w-6 h-6 text-red-500" />;
                })()}
              </div>

              <p className="text-3xl font-bold">
                {service?.Why_Matters?.[0]?.title}
              </p>

              <p className="text-gray-700">
                {service?.Why_Matters?.[0]?.subtitle}
              </p>

              <div className="flex flex-col gap-3">
                {[
                  service?.Why_Matters?.[0]?.ans1,
                  service?.Why_Matters?.[0]?.ans2,
                  service?.Why_Matters?.[0]?.ans3,
                  service?.Why_Matters?.[0]?.ans4
                ]
                  .filter(Boolean)
                  .map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <i className="fa-solid fa-angle-right" />
                      <p>{item}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* RIGHT CARD → What Carelabs Delivers */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl w-full lg:w-[45%] card-shadow flex flex-col gap-5">

              <div className="w-[50px] h-[50px] bg-[#e2ecf8] rounded-xl flex justify-center items-center">
                {service?.Why_Matters?.[1]?.icon && (() => {
                  const WhyIcon = LucideIcons[service.Why_Matters[1].icon] || LucideIcons.Circle;
                  return <WhyIcon className="w-6 h-6 text-[#2b7fff]" />;
                })()}
              </div>

              <p className="text-3xl font-bold">
                {service?.Why_Matters?.[1]?.title}
              </p>

              <p className="text-gray-700">
                {service?.Why_Matters?.[1]?.subtitle}
              </p>

              <div className="flex flex-col gap-3">
                {[
                  service?.Why_Matters?.[1]?.ans1,
                  service?.Why_Matters?.[1]?.ans2,
                  service?.Why_Matters?.[1]?.ans3,
                  service?.Why_Matters?.[1]?.ans4
                ]
                  .filter(Boolean)
                  .map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <i className="fa-regular fa-circle-check" />
                      <p>{item}</p>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* =====================================================================================
         SECTION 3 → What's Included Grid
      ===================================================================================== */}
      <section>
        <div className="w-full flex flex-col items-center py-10">
          {/* <p className=" text-4xl font-bold">{service?.WhatsIncludedtitle}</p> */}
           <p className=" text-4xl font-bold" dangerouslySetInnerHTML={{ __html: service.WhatsIncludedtitle }}></p>
          <p className="text-gray-700 max-w-xl text-center mt-3">{service?.WhatsIncludedsubtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[90%] lg:w-[70%]">
            {service?.whats_include_features?.map((f, idx) => {
              const Icon = LucideIcons[f.icon] || LucideIcons.Circle;
              return (
                <div
                  key={idx}
                  className="
                    bg-white p-6 rounded-2xl shadow-xl group
                    transform transition-transform duration-300
                    hover:-translate-y-2 hover:scale-[1.02]
                  "
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center transition-colors duration-300">
                      <Icon className="text-blue-600 text-xl group-hover:text-[#ff7038]" />
                    </div>

                    {f.stat && (
                      <span className="inline-block bg-orange-50 text-orange-700 text-sm font-medium px-3 py-1 rounded-xl w-fit">
                        {f.stat}
                      </span>
                    )}
                  </div>

                  <p className="text-xl font-bold mt-4 transition-colors duration-300 group-hover:text-[#2b7fff]">
                    {f.label}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">{f.description}</p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================================================
         SECTION 4 → How Study Runs (Timeline)
      ===================================================================================== */}
      {/* <section>
        <div className="w-full flex flex-col items-center py-10">

          <p className="gradient-text text-4xl font-bold">{service?.methodsTitle}</p>
          <p className="text-gray-700 max-w-xl text-center mt-3">{service?.methodsSubtitle}</p>

          <div className="w-[90%] md:w-[70%] flex flex-col gap-10 py-10">
            {service?.methodology?.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4">

                <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="bg-white rounded-2xl navbar-shadow flex flex-col md:flex-row overflow-hidden w-full lg:w-[60%]">
                    
                    <div
                      className="w-full md:w-[40%] h-56 md:h-auto"
                      style={{
                        backgroundImage: `url(${step?.image?.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="p-6 flex gap-4 md:w-[60%]">
                      <div className="w-[50px] h-[50px] flex justify-center items-center bg-amber-200 rounded-xl text-lg font-bold">
                        {step.Order}
                      </div>
                      <div>
                        <p className="text-xl font-bold">{step.OrderTitleText}</p>
                        <p className="text-sm text-gray-700 mt-2">{step.OrderSubtitleText}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {index !== service.methodology.length - 1 && (
                  <i className="fa-solid fa-angles-down text-blue-500 text-3xl" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section> */}

      <section>
  <div className="w-full flex flex-col items-center py-10">

    <p className="gradient-text text-4xl font-bold">{service?.methodsTitle}</p>
    <p className="text-gray-700 max-w-xl text-center mt-3">{service?.methodsSubtitle}</p>

    <div className="w-[90%] md:w-[70%] flex flex-col gap-10 py-10">
      {service?.methodology?.map((step, index) => (
        <div key={index} className="flex flex-col items-center gap-4">

          <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
            <div className="group bg-white rounded-2xl navbar-shadow flex flex-col md:flex-row overflow-hidden w-full lg:w-[80%] xl:w-[75%] 2xl:w-[70%]">
              {/* IMAGE */}
              <div className="w-full md:w-[40%] h-56 md:h-auto overflow-hidden">
                <div
                  className="
                    w-full h-full
                    transition-transform duration-[1100ms]
                    ease-[cubic-bezier(.13,.62,.31,1)]
                    group-hover:scale-[1.08]
                  "
                  style={{
                    backgroundImage: `url(${step?.image?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex gap-4 md:w-[90%]">
                <div className="w-[100px] h-[40px] flex justify-center items-center bg-[#e2ecf8] text-[#157be2] rounded-xl text-lg font-bold">
                  {step.Order}
                </div>
                {step.icon && (() => {
                    const StepIcon = LucideIcons[step.icon] || LucideIcons.Circle;
                    return <StepIcon className="text-[#157be2] w-12 h-10" />;
                  })()}
                <div>                      
                  {/* <p className="text-xl font-bold">{step.icon}</p> */}
                  <p className="text-xl font-bold">{step.OrderTitleText}</p>
                  <p className="text-sm text-gray-700 mt-2">{step.OrderSubtitleText}</p>
                </div>
              </div>
            </div>
          </div>

          {index !== service.methodology.length - 1 && (
            <i className="fa-solid fa-angles-down text-blue-500 text-3xl" />
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      {/* =====================================================================================
         SECTION 5 → Sector Benefits
      ===================================================================================== */}
      <section>
        <div className="w-full flex flex-col items-center py-10">

          <p className="gradient-text text-4xl font-bold">{service?.sectorBenefitsTitle}</p>
          <p className="text-gray-700 max-w-xl text-center mt-3">{service?.sectorBenefitsSubtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mt-10 w-[90%] lg:w-[70%]">
            {service?.sectorBenefits?.map((sec, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl card-shadow flex flex-col gap-4">

                <div className="w-[50px] h-[50px] bg-blue-300 rounded-xl flex justify-center items-center">
                  <i className={sec.icon} />
                </div>

                <p className="text-xl font-bold">{sec.label}</p>

                {[sec.list1, sec.list2, sec.list3].map(
                  (txt, i) =>
                    txt && (
                      <div key={i} className="flex gap-2">
                        <i className="fa-solid fa-circle-exclamation" />
                        <p>{txt}</p>
                      </div>
                    )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================================
         SECTION 6 → Results Section (Stats + Bottom Cards)
      ===================================================================================== */}
      <section>
        <div className="min-h-[80vh] flex justify-center py-10">
          <div className="w-[95%] md:w-[85%] lg:w-[70%] rounded-4xl navbar-shadow p-10 flex flex-col items-center">

            <p className="gradient-text text-4xl font-bold">{service?.resultsTitle}</p>
            <p className="text-gray-700 mt-3 text-center">{service?.resultsSubtitle}</p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-10">
              {service?.resultsStat?.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl text-center flex flex-col items-center gap-3">
                  <div className="w-[50px] h-[50px] bg-yellow-300 rounded-xl flex justify-center items-center">
                    <i className="fa-solid fa-circle-exclamation" />
                  </div>
                  <p className="text-4xl font-bold">{stat.percentage}</p>
                  <p className="text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* BOTTOM BOXES */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full mt-10">
              {service?.resultName?.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <i className={item.icon} />
                    <p className="text-xl font-bold">{item.label}</p>
                  </div>
                  <p className="text-sm pl-10">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="mt-10">
        <PowerSystemAnalysisCTA service={service} />
      </section>

      <section className="mt-10">
        <EngineeringServices service={service} />
      </section>

      <section className="mt-10">
        <FaqResourcesSection service={service} />
      </section>
    </div>
  );
}
