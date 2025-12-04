"use client";
import client from "@/lib/appollo-client";
import { GET_CONTACT_PAGE } from "@/lib/api-Collection";
import React, { useState, useEffect } from "react";
import { CheckCircle, FileText, HelpCircle, Headphones, Users, ChevronDown, Mail, Phone, MessageCircle, Download } from "lucide-react";
import * as LucideIcons from "lucide-react";


const moreFaqs = [
  {
    q: "What languages do your engineers speak?",
    a: "Our engineering teams are multilingual and support clients in English, Arabic, French, Hindi, and several regional languages. We match your project with the nearest and most suitable team."
  },
  {
    q: "Do you work with international standards?",
    a: "Yes, we comply with IEC, IEEE, NFPA, NEC, and local country-specific standards for all engineering assessments, reports, and studies."
  },
  {
    q: "How do you keep project data secure?",
    a: "We use encrypted storage, secure file-sharing channels, and follow strict cybersecurity practices. Sensitive project documentation is handled only by certified engineers."
  },
  {
    q: "What's the typical project timeline?",
    a: "Timeline depends on project complexity. Simple studies take 3–7 working days, while large-scale engineering projects may take several weeks. You’ll get an ETA upfront."
  },
  {
    q: "What industries do you support?",
    a: "We work with data centers, hospitals, utilities, manufacturing plants, oil & gas facilities, commercial buildings, and government sectors globally."
  },
  {
    q: "Can you help with compliance for multiple standards (IEC, NFPA, CSA)?",
    a: "Absolutely. Our engineers are certified across multiple international and regional standards including IEC, IEEE, NFPA, CSA, and NERC. We regularly work on projects requiring compliance with multiple standards simultaneously and can guide you through the specific requirements for your facility and location."
  },
];

const Contactpage = () => {
     const [contactData, setContactData] = useState(null);
     const [openIndex, setOpenIndex] = useState(null);
     const [selectedRegion, setSelectedRegion] = useState(
      contactData?.Where_we_support?.regions?.[0]?.region_item?.[0]
     );

     const fetchContactData = async () => {
        try {
          const res = await client.query({
            query: GET_CONTACT_PAGE,
          });
          setContactData(res.data.contactPage);
        } catch (err) {
          console.error("Error fetching contact page data:", err);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          await fetchContactData();
        };

        fetchData();
      }, []);

      if (!contactData) return <p>Loading...</p>;
  
    const cards = [
      {
        icon: <FileText className="w-6 h-6 text-blue-500" />,
        title: "Project & quote requests",
        desc: "For new projects and feasibility assessments",
        linkText: "Share project details →",
      },
      {
        icon: <HelpCircle className="w-6 h-6 text-blue-500" />,
        title: "Technical & standards questions",
        desc: "For engineers and facility teams with technical queries",
        linkText: "Ask a technical question →",
      },
      {
        icon: <Headphones className="w-6 h-6 text-blue-500" />,
        title: "Existing client support",
        desc: "For ongoing projects and report follow-ups",
        linkText: "Get support →",
      },
      {
        icon: <Users className="w-6 h-6 text-blue-500" />,
        title: "Partnerships & training",
        desc: "For OEMs, consultants, and training enquiries",
        linkText: "Discuss partnership →",
      },
    ];

  return (

    <>
    <section className="w-full flex items-center justify-center py-35 bg-[#F7F8FA]">
      <div        
      className=" w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%] bg-white  rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.08)]  p-10 md:p-14  flex flex-col md:flex-row items-center gap-10 ">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Badge */}
          <div className="flex">
            <button className="px-3 py-0.25 flex items-center justify-center gap-1 bg-[#e7f1fc] text-[#157de5] border border-[#157de54d] rounded-full mb-5">
              <div className="text-[#157de5]">
                  <LucideIcons.Zap size={13} />
              </div>
              <div>
                <p className=" text-[12px] font-medium">{contactData.badge}</p>
              </div> 
            </button>
          </div>
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold" dangerouslySetInnerHTML={{ __html: contactData.title }}>          
          </h1>

          {/* Sub text */}
          <p className="text-gray-500 mt-4 text-[18px] leading-relaxed">
            {contactData.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            {contactData?.buttons?.map((btn, index) => (
              <a
                key={index}
                href={btn.link || "#"}
                className={
                  index === 0
                    ? "px-6 py-3 bg-[#FF6B35] text-white rounded-full text-sm font-medium shadow hover:bg-[#ff5820] transition"
                    : "px-6 py-3 border border-blue-300 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition"
                }
              >
                {btn.text}
              </a>
            ))}
          </div>

          {/* Bullet list */}

          <div className="mt-6 space-y-3">
            {contactData?.features?.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border border-[#E5EEF5] bg-[#F9FBFD] rounded-full px-4 py-2"
              >
                {/* Icon Circle */}
                <div className="w-5 h-5 flex items-center justify-center bg-blue-50 rounded-full">
                  <CheckCircle className="text-blue-500 w-4 h-4" />
                </div>

                {/* Text */}
                <p className="text-gray-700 text-[14.5px] font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>


        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={contactData?.image?.url || "/placeholder.jpg"} 
              alt="Contact Section Image"
              className="w-full max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>

    {/* connectCard */}

    <section className="w-full flex flex-col items-center py-11 bg-[#F7F8FB]">
      <div
        className="
          w-[98%]
          md:w-[90%]
          lg:w-[85%]
          xl:w-[78%]
          2xl:w-[72%]
          text-center
        "
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: contactData?.Choose_how_to_connect?.title }}>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-[15.5px]">
          {contactData?.Choose_how_to_connect?.description}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactData?.Choose_how_to_connect?.connect_items?.map((item, i) => {
            const IconComponent = LucideIcons[item.icon] || LucideIcons.HelpCircle;

            return (
              <div
                key={i}
                className="
                  bg-white 
                  rounded-3xl 
                  p-6 md:p-7 
                  shadow-[0_6px_30px_rgba(0,0,0,0.05)] 
                "
              >
                <div className="flex items-start gap-4">

                  {/* ICON LEFT */}
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>

                  {/* TEXT RIGHT */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      {item.description}
                    </p>

                    <a
                      href={item.sharelink || "#"}
                      className="text-blue-600 font-medium text-sm hover:underline"
                    >
                      {item.sharetext}
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* formCard */}

    <section className="w-full flex items-center justify-center py-20 bg-[#F7F8FB]">
      <div
        className="
          w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          bg-white rounded-3xl 
          shadow-[0_10px_60px_rgba(0,0,0,0.08)]
          p-10 md:p-14
          flex flex-col md:flex-row gap-12
        "
      >

        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: contactData?.Tell_us_about_project?.title }}>
          </h1>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-3 items-start mb-8">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 11.5v3m0-8v.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {contactData?.Tell_us_about_project?.note}
            </p>
          </div>

          {/* Bullet List */}
          <h3 className="font-semibold mb-3 text-gray-900">
            {contactData?.Tell_us_about_project?.What_to_share_text}
          </h3>

          <ul className="space-y-2 text-gray-700 text-sm">
            {contactData?.Tell_us_about_project?.what_to_share_Items?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4 mt-0.5" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {(() => {
              const formFields = [...(contactData?.Tell_us_about_project?.contact_form?.contact_form_fields || [])];

              window._messageField = formFields.find(f =>
                f.fieldname?.toLowerCase().includes("message")
              );
              window._normalFields = formFields.filter(f =>
                f !== window._messageField
              );
            })()}

            {/* NORMAL FIELDS (NO MESSAGE FIELD HERE) */}
            {window._normalFields
              ?.sort((a, b) => a.order - b.order)
              .map((field, idx) => (
                <div key={idx} className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    {field.fieldname} {field.required ? "*" : ""}
                  </label>

                  <input
                    type="text"
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-3 border rounded-xl bg-gray-50"
                  />
                </div>
            ))}

            {/* TYPE OF HELP */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                {contactData?.Tell_us_about_project?.contact_form?.typeOfHelpTitle}
              </label>

              <select className="w-full px-4 py-3 border rounded-xl bg-gray-50 text-gray-600">

                {[...(contactData?.Tell_us_about_project?.contact_form?.typeOfHelpOptions || [])]
                  .sort((a, b) => a.order - b.order)
                  .map((opt, i) => (
                    <option key={i} selected={opt.default}>
                      {opt.name}
                    </option>
                ))}
              </select>
            </div>

            {/* SERVICES CHIPS */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                {contactData?.Tell_us_about_project?.contact_form?.servicesTitle}
              </label>

              <div className="flex flex-wrap gap-3 mt-3">
                {[...(contactData?.Tell_us_about_project?.contact_form?.services || [])]
                  .sort((a, b) => a.order - b.order)
                  .map((service, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                      {service.label}
                    </span>
                ))}
              </div>
            </div>

            {/* CONTACT METHOD */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-medium mb-2 block">
                {contactData?.Tell_us_about_project?.contact_form?.contactMethodTitle}
              </label>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
                {[...(contactData?.Tell_us_about_project?.contact_form?.contactMethods || [])]
                  .sort((a, b) => a.order - b.order)
                  .map((method, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact_method" />
                      {method.label}
                    </label>
                ))}
              </div>
            </div>

            {/* NOW PUT MESSAGE FIELD HERE */}
            {window._messageField && (
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <label className="text-sm font-medium mb-1">
                  {window._messageField.fieldname} {window._messageField.required ? "*" : ""}
                </label>

                <textarea
                  rows="4"
                  placeholder={window._messageField.placeholder}
                  required={window._messageField.required}
                  className="w-full px-4 py-3 border rounded-xl bg-gray-50"
                ></textarea>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-6">
              <button
                type="submit"
                className="
                  w-full md:w-[60%] 
                  py-3 bg-[#FF6B35] text-white 
                  rounded-full text-sm font-medium 
                  shadow hover:bg-[#ff5a1f] transition
                "
              >
                {contactData?.Tell_us_about_project?.contact_form?.submitbutton}
              </button>

              <p className="flex items-center gap-2 text-gray-600 text-sm mt-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 11.5v3m0-8v.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
                </svg>
                {contactData?.Tell_us_about_project?.contact_form?.reply_msg}
              </p>
            </div>

          </form>


          
          {/* <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="John Smith"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Company / Facility Name *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
            placeholder="ABC Manufacturing"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Work Email *</label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
            placeholder="john@company.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Country *</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
            placeholder="United States"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">City</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
            placeholder="New York"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label className="text-sm font-medium mb-1">Type of help you need *</label>
          <select className="w-full px-4 py-3 border rounded-xl bg-gray-50 text-gray-600">
            <option>Select an option</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label className="text-sm font-medium mb-1">
            Which services are you interested in?
          </label>

          <div className="flex flex-wrap gap-3 mt-3">
            {[
              "Power System Analysis",
              "Thermography",
              "Relay Coordination",
              "Compliance Audits",
              "Arc-Flash Studies",
              "Other",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium mb-2 block">
            Preferred contact method
          </label>

          <div className="flex items-center gap-6 text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact_method" defaultChecked />
              Email
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact_method" />
              Phone
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact_method" />
              Online Meeting
            </label>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label className="text-sm font-medium mb-1">Message *</label>
          <textarea
            rows="4"
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-6">

        <button
          type="submit"
          className="
            w-full md:w-[60%] 
            py-3 
            bg-[#FF6B35] 
            text-white 
            rounded-full 
            text-sm 
            font-medium 
            shadow 
            hover:bg-[#ff5a1f] 
            transition
          "
        >
          Send to our experts
        </button>

        <p className="flex items-center gap-2 text-gray-600 text-sm mt-3">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 11.5v3m0-8v.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
          We reply within one business day, often sooner, for all project and safety-critical requests
        </p>

        </div>

        </form> */}

        </div>
      </div>
    </section>

    {/* support */}

    <section className="w-full flex flex-col items-center py-20 bg-[#F7F8FB]">
      <div
        className="
          w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          text-center
        "
      >
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold leading-tight mb-4"  dangerouslySetInnerHTML={{ __html: contactData?.Where_we_support?.title }}>
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-[15px]">
          {contactData?.Where_we_support?.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT MAP CARD */}
          <div className="col-span-2 bg-white rounded-3xl shadow-[0_8px_50px_rgba(0,0,0,0.06)] p-8 md:p-12 flex items-center justify-center">
            <div className="w-full h-[350px] md:h-[420px] bg-[#F1F6FE] rounded-2xl flex flex-col items-center justify-center border border-gray-200">
              <div className="flex gap-3 mb-3">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <span className="w-4 h-4 rounded-full bg-blue-300"></span>
                <span className="w-4 h-4 rounded-full bg-orange-400"></span>
              </div>
              <p className="text-gray-600 font-medium text-sm">
                {selectedRegion?.region_name || "Select a region"}
              </p>

              {selectedRegion?.map_embed_code && (
                <div
                  className="w-full h-full mt-4"
                  dangerouslySetInnerHTML={{ __html: selectedRegion.map_embed_code }}
                />
              )}
            </div>
          </div>
      
          {/* RIGHT CARD */}
          <div className="flex flex-col gap-8">

            <div
              className="
                bg-white rounded-3xl 
                shadow-[0_8px_40px_rgba(0,0,0,0.05)] 
                p-8 text-left
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {contactData?.Where_we_support?.presence_types?.title}
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm">
                {contactData?.Where_we_support?.presence_types?.presence_type_item?.map(
                  (item, idx) => {
                    const IconComponent = LucideIcons[item.icon];

                    return (
                      <li key={idx} className="flex items-center gap-3">
                        {IconComponent ? (
                          <IconComponent
                            className="w-5 h-5"
                            stroke={item.icon_color} 
                            fill="none"
                          />
                        ) : (
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.icon_color }}
                          ></span>
                        )}
                        {item.label}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* Regions */}
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-8 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {contactData?.Where_we_support?.regions?.title || "Regions"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {contactData?.Where_we_support?.regions?.region_item?.map((region, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                      selectedRegion?.region_name === region.region_name
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {region.region_name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <section className="w-full flex justify-center py-10 bg-[#F7F8FB]">
        <div
          className="
            w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {contactData?.Where_we_support?.locations?.map((loc, i) => {
            const IconComponent = LucideIcons[loc.icon];

            return (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-xl bg-blue-50">
                    {IconComponent && (
                      <IconComponent
                        className="w-5 h-5"
                        stroke="#3B82F6" 
                        fill="none"
                      />
                    )}
                  </span>

                  <h3 className="font-semibold text-gray-900 text-[17px]">
                    {loc.location_name}
                  </h3>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: loc.type_color, color: "#fff" }}
                >
                  {loc.type}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">{loc.description}</p>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </section>

{/* where to start */}

<section className="w-full flex flex-col items-center py-14 bg-[#F7F8FB]">
  <div className="w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center" dangerouslySetInnerHTML={{ __html: contactData?.Not_sure?.title }}>
    </h1>

    {/* Subtitle */}
    <p className="text-gray-600 max-w-xl mx-auto mt-3 mb-14 text-center text-[15px]">
      {contactData?.Not_sure?.description}
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {contactData?.Not_sure?.Not_sure_Item?.map((item, idx) => {
        const IconComponent = LucideIcons[item.icon];

        return (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]
                       p-8 flex flex-col gap-2 border border-gray-100"
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
              </div>

              <h3 className="text-[18px] font-semibold text-gray-900 leading-snug">
                {item.heading}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-[14px] leading-[1.4] ml-[60px] mt-1">
              {item.description}
            </p>

            {/* LINK */}
            {item.Go_to_from_text && (
              <a
                href={item.Go_to_from_link}
                className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1 ml-[60px] mt-1"
              >
                {item.Go_to_from_text} →
              </a>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>


{/* gloabal reabality */}

<section className="w-full flex justify-center py-20 bg-[#F7F8FB]">
  <div className="w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]">

    <div
      className="
        bg-white rounded-3xl 
        shadow-[0_12px_60px_rgba(0,0,0,0.06)]
        p-10 md:p-16
        text-center
      "
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12" dangerouslySetInnerHTML={{ __html: contactData?.Local_expertise?.title }}>   
      </h2>


      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">

        {contactData?.Local_expertise?.Local_expertise_Item?.map((item, idx) => {
          const IconComponent = LucideIcons[item.icon];
          return (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                {IconComponent && <IconComponent size={32} className="text-blue-600" />}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {item.count}
              </h3>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          );
        })}
      </div>


      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* TRUST MESSAGE */}
      <p className="text-gray-600 text-sm max-w-xl mx-auto">
        {contactData?.Local_expertise?.Trusted_text}
      </p>

    </div>
  </div>
</section>

{/* faq */}

<section className="w-full flex flex-col items-center py-12 bg-[#F7F8FB]">
      <div
        className="
          w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          text-center
        "
      >
        

    {/* Title + Subtitle Section */}
    <h2 className="text-4xl md:text-5xl font-semibold mb-3" dangerouslySetInnerHTML={{ __html: contactData?.Before_you_reach_out_heading }}>
    </h2>

    <p className="text-gray-600 text-[15px] mb-12">
      {contactData?.Before_you_reach_out_subheading}
    </p>

        <div
          className="
            bg-white rounded-3xl p-8 md:p-10 
            shadow-[0_12px_60px_rgba(0,0,0,0.06)]
            w-full max-w-4xl mx-auto
          "
        >
          {contactData?.Before_you_reach_out_Item?.map((item, i) => (
            <div key={i} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full flex justify-between items-center py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-gray-800 font-medium text-[15px]">
                  {item.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section> 


   <section className="w-full flex justify-center py-10 bg-[#F7F8FB]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] md:w-[85%] xl:w-[75%]">
        {contactData?.contact_cta?.map((cta, i) => {
          const IconComponent = LucideIcons[cta.icon];
          return (
            <a
            key={i}
            href={cta.link || "#"} 
            className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                      flex flex-col items-center text-center gap-2 
                      hover:shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                      transition-all duration-300
                      cursor-pointer no-underline"
          >
            <div className="w-[60px] h-[60px] bg-[#eaf4ff] text-[#157de5] flex items-center justify-center rounded-2xl shadow-sm">
              {IconComponent && <IconComponent size={32} />}
            </div>

            <p className="text-lg font-semibold mt-2">{cta.heading}</p>
            <p className="text-[#157de5] text-sm font-medium">{cta.subheading}</p>
            {cta.message && <p className="text-gray-500 text-xs">{cta.message}</p>}
          </a>
          );
        })}
      </div>
    </section>
   </>
  )
}

export default Contactpage;
