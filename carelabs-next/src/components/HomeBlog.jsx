import React, { useEffect, useState } from 'react'
import client from "@/lib/appollo-client";
import { GET_INSIGHTS } from "@/lib/api-Collection";
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from "lucide-react";


const HomeBlog = () => {
 
const [insights, setInsights] = useState(null);

const fetchInsights = async () => {
  try {

    const response = await client.query({
      query:GET_INSIGHTS
    });
    console.log("Insights Data:", response.data.insight)

    setInsights(response.data.insight)
    
  } catch(error) {
    console.log("Error fetching insights:", error);
  }
}

useEffect(()=> {
  fetchInsights()
},[])

if(!insights) return null

//const featured = insights.articles[0];

const featured = insights.articles.find(a => a.featured === true)

if (!featured) {
  console.log("No featured article found!");
  return null;
}



  return (
    <>
        <div className="homeBlog-cover w-full  h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#e7f1ff]">
        <div 
        
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="w-[90%] md:w-full h-full flex flex-col items-center justify-center p-3">

        {/* HEADER SECTION */}
        <div className="w-full md:w-[80%] 2xl:w-[65%] flex flex-col md:flex-row md:items-center md:justify-between gap-5 2xl:p-2">
            
            <div className='w-full md:w-[80%] lg:w-[60%]'>
            <p className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight montserrat-font">{insights.title}</p>
            <p className="text-base md:text-lg lg:text-lg mt-3 leading-relaxed poppins-font para-text">
                {/* Stay updated on electrical safety, compliance, and power systems innovation. */}
                {insights.description}
            </p>
            </div>

            <Link href="/services/power-system-analysis" legacyBehavior>
              <a className="px-5 py-3 border border-blue-400 rounded-xl inline-block">
                {insights.button}
              </a>
            </Link>


        </div>

        {/* BLOG CARD */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="bg-white transform transition-all duration-500 ease-in-out hover:-translate-y-3 w-full mt-10  flex flex-col md:flex-row navbar-shadow group rounded-2xl 
          md:w-[80%]
          lg:h-auto
          2xl:w-[65%] ">

            {/* IMAGE SECTION */}
            <div
              className="w-full h-60 md:w-1/2 md:h-auto bg-cover bg-center 
                        rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
              <img
                  //src="https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg"
                  src={featured?.image?.url}
                  className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-115 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>

            {/* CONTENT SECTION */}
            <div
              className="w-full md:w-1/2 flex flex-col justify-center 
                        p-6 md:p-10 gap-7 lg:py-16 xl:py-20 
                        rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">

              <p className="text-sm text-[#2575b6] font-bold montserrat-font uppercase">
                {/* Compliance Insight */}
                {featured?.blog_category?.category}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold montserrat-font leading-snug">
                  {/* The Future of Electrical Safety: AI-Powered Predictive Maintenance */}
                  {featured?.title}
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] poppins-font leading-relaxed">
                  {/* Explore how artificial intelligence and machine learning are revolutionizing
                  electrical safety protocols and predictive maintenance strategies across global facilities. */}
                  {featured?.description}
              </p>

              <p className="text-sm poppins-font para-text">
                {/* March 20, 2024 · Power Systems */}
                {featured?.date} · {featured?.category}
              </p>

              {/* <p className="text-lg text-blue-500 cursor-pointer">
              Read article           
              </p> */}
              
              <a
                href={featured?.buttonlink}
                className="text-md font-semibold text-[#2575b6] cursor-pointer 
             flex items-center gap-2 group"
              >
                {featured?.buttontext}
                <ArrowRight 
                  size={18} 
                  className="text-[#2575b6] transform transition-all duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
        </div>
      </div>
    </div>

        <div className="w-full py-10 bg-[#e7f1ff]">
          <div className="cards-blog grid grid-cols-1 mt-16 lg:grid-cols-3 gap-8 w-[85%]  md:w-[80%] lg:mt-10  2xl:w-[65%] mx-auto sm-p-5">

            {/* CARD 1 */}
            {insights.articles.slice(1, 4).map((item, idx) => (
               <a key={idx} href={item.buttonlink} >
                  <div className='transform transition-all duration-500 ease-in-out hover:-translate-y-3 border-1 border-transparent  hover:border hover:border-blue-900 '>
                    <div 
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    key={idx} className=" bg-[#e6f0fd]
                     card-shadow rounded-xl
                     flex flex-col  hover:shadow-lg cursor-pointer group">

                      {/* IMAGE */}
                      <div className="w-full h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={item?.image?.url}
                          className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-115"
                          alt={item.title}
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="px-6 py-4 flex flex-col gap-3 rounded-2xl">
                        <div className="flex items-center gap-1">
                          {(() => {
                            const IconComponent = LucideIcons[item.icon];
                            return IconComponent ? <IconComponent size={14} className="text-[#1f7fdb]" /> : null;
                          })()}
                          <p className="text-[12px] text-[#1f7fdb] font-bold">
                            {item.blog_category?.category}
                          </p>
                        </div>
                        <p className="text-xl font-semibold montserrat-font">{item.title}</p>
                        <p className="text-sm text-[#4B5563] text-para poppins-font">{item.description}</p>
                        <p className="text-xs text-[#4B5563] text-para   poppins-font">
                          {item.date} · {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                     </a>
            ))}


          </div>
        </div>

    </>

  )
}

export default HomeBlog
