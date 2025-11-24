"use client";
import React from "react";

const Page = () => {
  return (
   

    // <div className="w-full min-h-screen bg-[#f6f7fb] p-6 md:p-12 flex justify-center">
       

    //   <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-6 md:p-10">
        
    //     {/* Breadcrumbs */}
    //     <div className="text-sm text-gray-500 mb-4 flex gap-2">
    //       <a href="/" className="hover:text-blue-600">Home</a> /
    //       <a href="/insights" className="hover:text-blue-600"> Insights Hub </a> /
    //       <span className="text-gray-700 font-medium">The Future of Electrical Safety</span>
    //     </div>

    //     <div className="flex flex-col md:flex-row items-start gap-10">
          
    //       {/* Left Content */}
    //       <div className="flex-1">
            
    //         {/* Category */}
    //         <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
    //           Insights • Electrical Safety
    //         </span>

    //         {/* Title */}
    //         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
    //           The Future of <span className="text-blue-600">Electrical Safety</span>:  
    //           AI-Powered Predictive Maintenance
    //         </h1>

    //         {/* Subtitle */}
    //         <p className="text-gray-600 text-lg mb-6 max-w-xl">
    //           Discover how artificial intelligence and machine learning are revolutionizing
    //           electrical safety protocols and predictive maintenance strategies across global facilities.
    //         </p>

    //         {/* Meta */}
    //         <div className="border-t border-gray-300 pt-4 mb-5 text-gray-500 text-sm flex items-center gap-6 flex-wrap">
    //           <span>👤 By Carelabs Engineering Team</span>
    //           <span>📅 Published on: 10 Dec 2025</span>
    //           <span>⏱ 8 min read</span>
    //         </div>

    //         {/* Tags */}
    //         <div className="flex flex-wrap gap-3">
    //           <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">AI</span>
    //           <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Predictive Maintenance</span>
    //           <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Electrical Safety</span>
    //         </div>
    //       </div>

    //       {/* Right Image */}
    //       <div className="flex-1">
    //         <img
    //           src="/mnt/data/444b01bd-e90a-4c39-8c93-68228733b90e.png"
    //           alt="Blog Hero"
    //           className="rounded-2xl w-full h-auto shadow-md"
    //         />
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div className="w-full min-h-screen bg-[#f6f7fb] p-6 md:p-12 flex flex-col items-center">

      {/* Breadcrumbs OUTSIDE the white box */}
      <div className="max-w-6xl w-full mb-4 text-sm text-gray-500 flex gap-2">
        <a href="/" className="hover:text-blue-600">Home</a> /
        <a href="/insights" className="hover:text-blue-600">Insights Hub</a> /
        <span className="text-gray-700 font-medium">The Future of Electrical Safety</span>
      </div>

      {/* WHITE BOX */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-6 md:p-10">

        <div className="flex flex-col md:flex-row items-start gap-10">
          
          {/* Left Content */}
          <div className="flex-1">
            
            {/* Category */}
            <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
              Insights • Electrical Safety
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              The Future of <span className="text-blue-600">Electrical Safety</span>:  
              AI-Powered Predictive Maintenance
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Discover how artificial intelligence and machine learning are revolutionizing
              electrical safety protocols and predictive maintenance strategies across global facilities.
            </p>

            {/* Meta */}
            <div className="border-t border-gray-300 pt-4 mb-5 text-gray-500 text-sm flex items-center gap-6 flex-wrap">
              <span>👤 By Carelabs Engineering Team</span>
              <span>📅 Published on: 10 Dec 2025</span>
              <span>⏱ 8 min read</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">AI</span>
              <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Predictive Maintenance</span>
              <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Electrical Safety</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/mnt/data/444b01bd-e90a-4c39-8c93-68228733b90e.png"
              alt="Blog Hero"
              className="rounded-2xl w-full h-auto shadow-md"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
