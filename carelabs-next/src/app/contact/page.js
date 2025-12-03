"use client";

import React, { useState } from 'react'
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

const page = () => {

     const [openIndex, setOpenIndex] = useState(null);
  
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
        
      className="
       w-[98%]
  md:w-[90%]
  lg:w-[85%]
  xl:w-[78%]
  2xl:w-[72%]
  bg-white 
  rounded-3xl 
  shadow-[0_10px_60px_rgba(0,0,0,0.08)] 
  p-10 md:p-14 
  flex flex-col md:flex-row items-center gap-10
      "
        
      >

        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Badge */}
          <button className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            ⚡ Contact Our Team
          </button>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Talk to our <br />
            <span className="text-blue-600">electrical safety</span> &{" "}
            <span className="text-orange-500">power system</span> experts
          </h1>

          {/* Sub text */}
          <p className="text-gray-600 mt-4 text-[15px] leading-relaxed">
            Whether you need a project quote, technical clarification, compliance guidance,
            or want to discuss a large-scale power system project, our certified engineers
            are here to help you solve complex electrical challenges.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 bg-[#FF6B35] text-white rounded-full text-sm font-medium shadow hover:bg-[#ff5820] transition">
              Request a project review
            </button>
            <button className="px-6 py-3 border border-blue-300 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition">
              Book a discovery call
            </button>
          </div>

    {/* Bullet list */}

    <div className="mt-6 space-y-3">
  {[
    "Response within 1 business day*",
    "Certified power system engineers",
    "On-site & remote support available",
  ].map((item, i) => (
    <div
      key={i}
      className="flex items-center gap-3 border border-[#E5EEF5] bg-[#F9FBFD] rounded-full px-4 py-2"
    >
      <div className="w-5 h-5 flex items-center justify-center bg-blue-50 rounded-full">
        <CheckCircle className="text-blue-500 w-4 h-4" />
      </div>

      <p className="text-gray-700 text-[14.5px] font-medium">{item}</p>
    </div>
    ))}
    </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://preview--global-grid-glimpse.lovable.app/assets/control-room-CQqtiREW.jpg"
              alt="Control room"
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
    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold mb-4 leading-tight">
      Choose how you'd like to{" "}
      <span className="text-orange-500">connect</span>
    </h1>

    <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-[15.5px]">
      Different options are available based on urgency and complexity of your requirement
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card, i) => (
        
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
      {card.icon}
    </div>

    {/* TEXT RIGHT (aligned at the TOP) */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {card.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-2">
        {card.desc}
      </p>

      <a
        href="#"
        className="text-blue-600 font-medium text-sm hover:underline"
      >
        {card.linkText}
      </a>
    </div>

  </div>
</div>

      ))}
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
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
        Tell us about your{" "}
        <span className="text-blue-600">project</span>{" "}
        or requirement
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
          Your information is protected and will only be used to
          respond to your enquiry. We typically respond within  
          one business day.
        </p>
      </div>

      {/* Bullet List */}
      <h3 className="font-semibold mb-3 text-gray-900">
        What to share with us:
      </h3>

      <ul className="space-y-2 text-gray-700 text-sm">
        {[
          "Site location and voltage level",
          "Number of panels, switchgear, or assets",
          "Standards you need to comply with (IEC, NFPA, CSA)",
          "Timeline and urgency level",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="text-blue-500 w-4 h-4 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="flex-1">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* FULL NAME */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Full Name *</label>
    <input
      type="text"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-300 outline-none"
      placeholder="John Smith"
    />
  </div>

  {/* COMPANY */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Company / Facility Name *</label>
    <input
      type="text"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50"
      placeholder="ABC Manufacturing"
    />
  </div>

  {/* WORK EMAIL */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Work Email *</label>
    <input
      type="email"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50"
      placeholder="john@company.com"
    />
  </div>

  {/* PHONE */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Phone</label>
    <input
      type="text"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50"
      placeholder="+1 (555) 123-4567"
    />
  </div>

  {/* COUNTRY */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Country *</label>
    <input
      type="text"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50"
      placeholder="United States"
    />
  </div>

  {/* CITY */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">City</label>
    <input
      type="text"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50"
      placeholder="New York"
    />
  </div>

  {/* DROPDOWN — FULL WIDTH ON BOTH */}
  <div className="col-span-1 md:col-span-2 flex flex-col">
    <label className="text-sm font-medium mb-1">Type of help you need *</label>
    <select className="w-full px-4 py-3 border rounded-xl bg-gray-50 text-gray-600">
      <option>Select an option</option>
    </select>
  </div>

  {/* SERVICES */}
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

  {/* Preferred Contact Method */}
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

  {/* MESSAGE */}
  <div className="col-span-1 md:col-span-2 flex flex-col">
    <label className="text-sm font-medium mb-1">Message *</label>
    <textarea
      rows="4"
      className="w-full px-4 py-3 border rounded-xl bg-gray-50"
      placeholder="Write your message..."
    ></textarea>
  </div>

  {/* SUBMIT BUTTON */}
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

  {/* Info Message */}
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

</form>

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
    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold leading-tight mb-4">
      Where we <span className="text-blue-600">support</span>{" "}
      <span className="text-orange-500">you</span>
    </h1>

    <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-[15px]">
      Carelabs operates through offices, direct on-site service regions,
      and remote engineering support to serve clients globally
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      <div
        className="
          col-span-2 bg-white rounded-3xl 
          shadow-[0_8px_50px_rgba(0,0,0,0.06)] 
          p-8 md:p-12 flex items-center justify-center
        "
      >

        <div className="w-full h-[350px] md:h-[420px] bg-[#F1F6FE] rounded-2xl flex flex-col items-center justify-center border border-gray-200">
          <div className="flex gap-3 mb-3">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="w-4 h-4 rounded-full bg-blue-300"></span>
            <span className="w-4 h-4 rounded-full bg-orange-400"></span>
          </div>
          <p className="text-gray-600 font-medium text-sm">Global Coverage Map</p>
        </div>
      </div>

      
      <div className="flex flex-col gap-8">

        <div
          className="
            bg-white rounded-3xl 
            shadow-[0_8px_40px_rgba(0,0,0,0.05)] 
            p-8 text-left
          "
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Presence Types
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              Engineering offices
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 border-2 border-blue-600 rounded-full"></span>
              On-site service coverage
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 border-2 border-orange-500 rounded-full"></span>
              Remote services
            </li>
          </ul>
        </div>

        <div
          className="
            bg-white rounded-3xl 
            shadow-[0_8px_40px_rgba(0,0,0,0.05)] 
            p-8 text-left
          "
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Regions
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Middle East & GCC",
              "India & South Asia",
              "Africa",
              "Europe & UK",
              "North America",
              "Other regions",
            ].map((region, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                {region}
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

      {/* CARD 1 */}
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-xl">
            📍
          </span>
          <h3 className="font-semibold text-gray-900 text-[17px]">
            Dubai, UAE – Regional Hub
          </h3>
        </div>

        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
          Engineering office
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">
          On-site coverage across UAE & GCC / Remote projects worldwide
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-xl">
            📍
          </span>
          <h3 className="font-semibold text-gray-900 text-[17px]">
            Toronto, Canada – Delivery Center
          </h3>
        </div>

        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
          On-site service region
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">
          Focused on low–medium voltage audits & power studies
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-xl">
            📍
          </span>
          <h3 className="font-semibold text-gray-900 text-[17px]">
            Mumbai, India – Technical Center
          </h3>
        </div>

        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
          Engineering office
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">
          Power system studies and compliance services across South Asia
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-xl">
            📍
          </span>
          <h3 className="font-semibold text-gray-900 text-[17px]">
            London, UK – European Operations
          </h3>
        </div>

        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
          On-site service region
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">
          On-site inspections and technical support across Europe
        </p>
      </div>

      {/* CARD 5 */}
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-orange-50 flex items-center justify-center rounded-xl">
            🛰️
          </span>
          <h3 className="font-semibold text-gray-900 text-[17px]">
            Remote Engineering Desk – Global
          </h3>
        </div>

        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
          Remote services
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">
          Relay coordination, power system studies, and report reviews worldwide
        </p>
      </div>

      {/* CARD 6 */}
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-xl">
            📍
          </span>
          <h3 className="font-semibold text-gray-900 text-[17px]">
            Nairobi, Kenya – Africa Hub
          </h3>
        </div>

        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
          On-site service region
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">
          On-site services and training across African markets
        </p>
      </div>

    </div>
  </div>
</section>

</section>

{/* where to start */}

<section className="w-full flex flex-col items-center py-14 bg-[#F7F8FB]">
  <div className="w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center">
      Not sure where to <span className="text-blue-600">start</span>
      <span className="text-orange-500">?</span>
    </h1>

    {/* Subtitle */}
    <p className="text-gray-600 max-w-xl mx-auto mt-3 mb-14 text-center text-[15px]">
      Choose the guidance that best matches your role and requirement
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

  {[
    {
      icon: <LucideIcons.FileText size={26} className="text-blue-600" />,
      title: "Facility managers & HSE teams",
      desc: "Use Project & quote requests to get started with your electrical safety assessment",
    },
    {
      icon: <LucideIcons.BookOpen size={26} className="text-blue-600" />,
      title: "Consultants & EPCs",
      desc: "Share your single-line diagrams and standards requirements in the form",
    },
    {
      icon: <LucideIcons.UsersRound size={26} className="text-blue-600" />,
      title: "OEMs & channel partners",
      desc: "Choose Partnership / Training to discuss collaboration opportunities",
    },
    {
      icon: <LucideIcons.Headphones size={26} className="text-blue-600" />,
      title: "Existing clients",
      desc: "Use Existing client support or email us directly at support@carelabs.com",
    },
  ].map((card, idx) => (
    <div
      key={idx}
      className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]
                 p-8 flex flex-col gap-2 border border-gray-100"
    >
      {/* ICON + TITLE */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
          {card.icon}
        </div>

        <h3 className="text-[18px] font-semibold text-gray-900 leading-snug">
          {card.title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-[14px] leading-[1.4] ml-[60px] mt-1">
        {card.desc}
      </p>

      {/* LINK */}
      <a
        href="#"
        className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1 ml-[60px] mt-1"
      >
        Go to form →
      </a>
    </div>
  ))}

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
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Local expertise,{" "}
        <span className="text-blue-600">global</span>{" "}
        <span className="text-orange-500">reliability</span>
      </h2>


      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">

        {/* METRIC 1 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
            {LucideIcons["Globe"] && (
              <LucideIcons.Globe size={32} className="text-blue-600" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">50+</h3>
          <p className="text-gray-600 text-sm">countries served</p>
        </div>

        {/* METRIC 2 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
            {LucideIcons["CircleCheck"] && (
              <LucideIcons.CircleCheck size={32} className="text-blue-600" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            10,000<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-600 text-sm">assets analysed</p>
        </div>

        {/* METRIC 3 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
            {LucideIcons["Award"] && (
              <LucideIcons.Award size={32} className="text-blue-600" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">100%</h3>
          <p className="text-gray-600 text-sm">industry-certified engineers</p>
        </div>

        {/* METRIC 4 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
            {LucideIcons["Shield"] && (
              <LucideIcons.Shield size={32} className="text-blue-600" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            <span className="text-blue-600">IEC</span> /{" "}
            <span className="text-orange-500">NFPA</span>
          </h3>
          <p className="text-gray-600 text-sm">local codes aligned</p>
        </div>

      </div>


      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* TRUST MESSAGE */}
      <p className="text-gray-600 text-sm max-w-xl mx-auto">
        Trusted by{" "}
        <span className="font-medium text-gray-800">
          data centers, hospitals, manufacturing plants, and utilities
        </span>{" "}
        worldwide
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
    <h2 className="text-4xl md:text-5xl font-semibold mb-3">
      Before you <span className="text-blue-600">reach</span>{" "}
      <span className="text-orange-500">out</span>
    </h2>

    <p className="text-gray-600 text-[15px] mb-12">
      Common questions about contacting our team and working with Carelabs
    </p>

        <div
          className="
            bg-white rounded-3xl p-8 md:p-10 
            shadow-[0_12px_60px_rgba(0,0,0,0.06)]
            w-full max-w-4xl mx-auto
          "
        >
          {moreFaqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full flex justify-between items-center py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-gray-800 font-medium text-[15px]">
                  {item.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section> 


   <section className="w-full flex justify-center py-10 bg-[#F7F8FB]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] md:w-[85%] xl:w-[75%]">

    {/* Email */}
    <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    flex flex-col items-center text-center gap-2 
                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    transition-all duration-300">
      <div className="w-[60px] h-[60px] bg-[#eaf4ff] text-[#157de5]
                      flex items-center justify-center rounded-2xl shadow-sm">
        <Mail size={32} />
      </div>
      <p className="text-lg font-semibold mt-2">Email our experts</p>
      <p className="text-[#157de5] text-sm font-medium">solutions@carelabs.com</p>
    </div>

    {/* Phone */}
    <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    flex flex-col items-center text-center gap-2 
                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    transition-all duration-300">
      <div className="w-[60px] h-[60px] bg-[#eaf4ff] text-[#157de5]
                      flex items-center justify-center rounded-2xl shadow-sm">
        <Phone size={32} />
      </div>
      <p className="text-lg font-semibold mt-2">Call our regional desk</p>
      <p className="text-[#157de5] text-sm font-medium">+1 (555) 123-4567</p>
      <p className="text-gray-500 text-xs">We’ll route you to the right team</p>
    </div>

    {/* WhatsApp */}
    <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    flex flex-col items-center text-center gap-2 
                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    transition-all duration-300">
      <div className="w-[60px] h-[60px] bg-[#eaf4ff] text-[#157de5]
                      flex items-center justify-center rounded-2xl shadow-sm">
        <MessageCircle size={32} />
      </div>
      <p className="text-lg font-semibold mt-2">Message us on WhatsApp</p>
      <p className="text-[#157de5] text-sm font-medium">Quick response</p>
    </div>

    {/* Download PDF */}
    <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    flex flex-col items-center text-center gap-2 
                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    transition-all duration-300">
      <div className="w-[60px] h-[60px] bg-[#eaf4ff] text-[#157de5]
                      flex items-center justify-center rounded-2xl shadow-sm">
        <Download size={32} />
      </div>
      <p className="text-lg font-semibold mt-2">Download company profile</p>
      <p className="text-[#157de5] text-sm font-medium">PDF brochure</p>
    </div>

  </div>
</section>









   </>
  )
}

export default page
