"use client"

import React, { useState, useEffect } from 'react'
import client from '@/lib/appollo-client'
import { GET_FOOTER } from '@/lib/api-Collection'

const Footer = () => {
 const [footerData, setFooterData] = useState(null)

 const fetchFooter = async () => {
    try {
        const response = await client.query({
            query:GET_FOOTER
        });
        console.log("footerData:", response.data.footer)

        setFooterData(response.data.footer)
    } catch (error) {
        console.log("Error fetching footer:", error);
    }
 }

 useEffect(()=> {
    fetchFooter()
 },[])

 if(!footerData) return null

 const { logo, description, socialLinks, footerMenu, bottomLinks, copyrightText } =
    footerData;

  return (
    // <div>
    //  <div className="w-full footer-background md:h-[350px] lg:h-[400px] py-10 flex justify-center">
    // <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row gap-8">

    //     {/* LOGO & DESCRIPTION */}
    //     <div className="flex-1 flex flex-col gap-4 text-gray-50">
    //     <img
    //         className="w-32 md:w-40"
    //         src="https://proper-hug-7f40206151.media.strapiapp.com/carelab_logo_552fa645c1.png"
    //         alt="Logo"
    //     />
    //     <p className="text-sm md:text-base">
    //         Leading the future of electrical safety, compliance, and power system optimization with global expertise and local presence.
    //     </p>
    //     <div className="flex gap-3">
    //         <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black">
    //         <i className="fa-solid fa-globe"></i>
    //         </div>
    //         <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black">
    //         <i className="fa-solid fa-globe"></i>
    //         </div>
    //         <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black">
    //         <i className="fa-solid fa-globe"></i>
    //         </div>
    //     </div>
    //     </div>

    //     {/* COLUMNS */}
    //     {["What We Do", "Company", "Support"].map((title, idx) => (
    //     <div key={idx} className="flex-1 flex flex-col gap-2 text-gray-50">
    //         <p className="text-lg font-bold">{title}</p>
    //         <a href="#" className="text-sm hover:underline">Services Overview</a>
    //         <a href="#" className="text-sm hover:underline">Services Overview</a>
    //         <a href="#" className="text-sm hover:underline">Services Overview</a>
    //     </div>
    //     ))}

    // </div>
    // </div>

    // </div>

  <div>
      <div className="w-full footer-background md:h-[350px] lg:h-[400px] py-10 flex justify-center">
        <div className="w-[90%] md:w-[80%] 2xl:w-[65%] flex flex-col md:flex-row gap-8">

          {/* LOGO & DESCRIPTION */}
          <div className="flex-1 flex flex-col gap-4 text-gray-50">
            <img
              className="w-32 md:w-40"
              src={logo?.url}
              alt="Footer Logo"
            />

            <p className="text-sm md:text-base">{description}</p>

            <div className="flex gap-3">
              {socialLinks?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* FOOTER MENUS */}
          {footerMenu?.map((col, idx) => (
            <div key={idx} className="flex-1 flex flex-col gap-2 text-gray-50">
              <p className="text-lg font-bold">{col.title}</p>

              {col.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-sm hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM FOOTER LINKS */}
      <div className="w-full bg-black text-gray-300 py-4 text-center text-sm">
        <div className="flex flex-wrap gap-4 justify-center mb-2">
          {bottomLinks?.map((item, idx) => (
            <a key={idx} href={item.url} className="hover:underline">
              {item.label}
            </a>
          ))}
         
        </div>

        <p className="text-xs">{copyrightText}</p>
      </div>
    </div>
  )
}

export default Footer
 