import React, { useEffect, useState } from 'react'
import client from "@/lib/appollo-client";
import { GET_INSIGHTS } from "@/lib/api-Collection";

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
        <div className="homeBlog-cover w-full  h-screen flex items-center justify-center ">
        <div className="w-[90%] md:w-full h-full flex flex-col items-center justify-center p-3">

        {/* HEADER SECTION */}
        <div className="w-full md:w-[95%] 2xl:w-[65%] flex flex-col md:flex-row md:items-center md:justify-between gap-5 2xl:p-2">
            
            <div>
            <p className="text-3xl lg:text-5xl font-bold">{insights.title}</p>
            <p className="text-lg mt-2">
                {/* Stay updated on electrical safety, compliance, and power systems innovation. */}
                {insights.description}
            </p>
            </div>

            <button className="px-5 py-3 border border-blue-400 rounded-xl">
            <a href={insights.buttonLink}>{insights.button}</a>
            </button>
        </div>

        {/* BLOG CARD */}
        <div
            className="w-full md:w-[95%] 2xl:w-[65%] md:h-[80%] 2xl:h-[85%] mt-10
                    flex flex-col md:flex-row navbar-shadow rounded-2xl ">

            {/* IMAGE SECTION */}
            <div
            className="w-full h-60 md:w-1/2 md:h-auto bg-cover bg-center 
                        rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <img
                //src="https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg"
                src={featured?.image?.url}
                className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
            </div>

            {/* CONTENT SECTION */}
            <div
            className="w-full md:w-1/2 flex flex-col justify-center 
                        p-6 md:p-10 gap-7 
                        rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">

            <p className="text-md font-bold">
              {/* Compliance Insight */}
              {featured?.blog_category?.category}
            </p>

            <p className="text-3xl font-bold">
                {/* The Future of Electrical Safety: AI-Powered Predictive Maintenance */}
                {featured?.title}
            </p>

            <p className="text-lg">
                {/* Explore how artificial intelligence and machine learning are revolutionizing
                electrical safety protocols and predictive maintenance strategies across global facilities. */}
                {featured?.description}
            </p>

            <p className="text-sm">
              {/* March 20, 2024 · Power Systems */}
              {featured?.date} · {featured?.category}
              </p>

            {/* <p className="text-lg text-blue-500 cursor-pointer">
              Read article           
              </p> */}
              
              <a
                href={featured?.buttonlink}
                className="text-lg text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                {featured?.buttontext}
             </a>

            </div>
        </div>
        </div>
    </div>

<div className="w-full py-10">
  <div className="cards-blog grid grid-cols-1 mt-16 md:grid-cols-3 gap-8 w-[85%]  md:w-[90%] lg:mt-10  2xl:w-[65%] mx-auto sm-p-5">

    {/* CARD 1 */}
    {insights.articles.slice(1, 4).map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl card-shadow flex flex-col">

              {/* IMAGE */}
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={item?.image?.url}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>

              {/* CONTENT */}
              <div className="px-6 py-4 flex flex-col gap-3">

                <p className="text-sm text-blue-600 font-bold">
                  {item.blog_category?.category}
                </p>

                <p className="text-xl font-bold">{item.title}</p>

                <p className="text-sm text-gray-600">{item.description}</p>

                <p className="text-xs text-gray-500">
                  {item.date} · {item.category}
                </p>

              </div>
            </div>
          ))}


  </div>
</div>

    </>

  )
}

export default HomeBlog
