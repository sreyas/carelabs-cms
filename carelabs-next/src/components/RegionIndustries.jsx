import { Heart, Zap } from 'lucide-react'
import React from 'react'

const RegionIndustries = () => {
    const industriesData = [
  {
    title: "Hospitals & Healthcare",
    points: [
      "Arc-flash risk reduction",
      "Critical power system reliability",
      "CSA Z462 compliance reporting",
    ],
    tag: "Up to 40% fewer nuisance trips",
    color: "#2575B6",
    background:"#2575B610"
  },
  {
    title: "Manufacturing Plants",
    points: [
      "Downtime prevention",
      "Motor starting analysis",
      "Protective device coordination",
    ],
    tag: "Minimize production interruptions",
    color: "#059669",
    background:"#05966910"
  },
  {
    title: "Commercial & High-rise Buildings",
    points: [
      "Tenant safety assurance",
      "Energy efficiency optimization",
      "Code compliance validation",
    ],
    tag: "Up to 40% fewer nuisance trips",
    color: "#F15C30",
    background:"#F15C3010"
  },
  {
    title: "Data Centres",
    points: [
      "99.99% uptime protection",
      "Redundancy verification",
      "Power quality analysis",
    ],
    tag: "Up to 40% fewer nuisance trips",
    color: "#2563EB",
    background:"#2563EB10"
  },
  {
    title: "Universities & Campuses",
    points: [
      "Multi-building coordination",
      "Student & staff safety",
      "Standards-aligned reporting",
    ],
    tag: "Up to 40% fewer nuisance trips",
    color: "#7C3AED",
    background:"#7C3AED10"
  },
  {
    title: "Utilities & Substations",
    points: [
      "Grid stability analysis",
      "NERC compliance support",
      "Protection scheme optimization",
    ],
    tag: "Up to 40% fewer nuisance trips",
    color: "#DC2626",
    background:"#DC262610"
    
  }
];

  return (
    <div className=' w-full flex flex-col items-center justify-center mt-40 '>
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:">
            
                {/* Heading */}
                <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
                    <div className="text-[#157de5]">
                        <Zap size={18} />
                    </div>

                    {/* Global Reach */}
                    Industries
               
                </h1>
                
                {/* Title */}
                <h2 className="gradient-text  text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-semibold montserrat-font">
                {/* Comprehensive Power Solutions */}
                    Key Industries We Serve in Canada
                </h2>
                
                {/* Description */}
                <p className="px-4 sm:px-8 text-lg  md:text-xl poppins-font para-text">
                  {/* From analysis to optimization, we deliver end-to-end power system solutions backed by cutting-edge technology and decades of expertise. */}
                  Focused on protecting critical Canadian infrastructure across sectors with power system expertise and safety-first solutions.
                </p>
    
    
        <div className="grid grid-cols-1 md:grid-cols-2   xl:grid-cols-5 gap-3 2xl:mt-10">

            <div className="p-3 bg-white text-center card-shadow rounded-full ">
                <p className='text-[14px] poppins-font  '>Facilities & Commercial</p>
            </div>
               <div className="p-3 bg-white text-center card-shadow rounded-full">
                <p className='text-[14px] poppins-font '>Manufacturing</p>
            </div>
               <div className="p-3 bg-white text-center card-shadow rounded-full">
                <p className='text-[14px] poppins-font '>Healthcare & Labs</p>
            </div>
               <div className="p-3 bg-white text-center card-shadow rounded-full">
                <p className='text-[14px] poppins-font '>Data Centres & Tech</p>
            </div>
               <div className="p-3 bg-white text-center card-shadow rounded-full">
                <p className='text-[14px] poppins-font '>Utilities & Energy</p>
            </div>

        </div>


        </div>

        <div className="w-11/12  sm:w-[80%] 2xl:w-[65%] 2xl:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {industriesData.map((item, index) => (
                <div 
                key={index} 
                className="glass-panel p-5 rounded-xl"
                
                >
                <div className="w-[50px] h-[50px] rounded-lg  flex items-center justify-center"
                style={{
                    background:item.background,
                    color:item.color
                }}>
                    <Heart />
                </div>

                <h4 className="montserrat-font text-[24px] font-semibold py-3">
                    {item.title}
                </h4>

                <ul className="list-disc px-5">
                    {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>

                <p className=" w-fit py-1 px-2 rounded-full text-[12px] poppins-font mt-2"
                style={{
                    background:item.background,
                    color:item.color
                }}>
                    {item.tag}
                </p>
                </div>
            ))}
        </div>



    
    </div>
  )
}

export default RegionIndustries
