import { Heart, Zap } from 'lucide-react'
import React from 'react'
import { clientIcons } from "@/lib/clientIcons";




const HomeIndustry = ({data}) => {

  if(!data)return null
         
    const BadgeIcon =clientIcons[data.badgeicon.trim()];
    const industriesData=data.key_industries || [];

  return (
    <div className=' w-full flex flex-col items-center justify-center mt-40 '>
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:">
            
                {/* Heading */}
                <div className="flex justify-center items-center">
                    <button className="px-4 flex items-center justify-center gap-2 py-2 border border-[#157de54d] rounded-full ">
                    <div className="text-[#157de5]">
                        <BadgeIcon size={18} />
                    </div>

                    <div>
                        <p className="curved-Text text-[14px] montserrat-font">{data.badge}</p>
                    </div>
                    
                    
                    </button>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-bold montserrat-font"
                  dangerouslySetInnerHTML={{ __html: data.title }}
                >
                {/* Comprehensive Power Solutions */}
                   
                </h2>
                
                {/* Description */}
                <p className="px-4 w-[80%] sm:px-8 text-lg  md:text-xl poppins-font para-text">
                     {data.description}
                </p>
    
    
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3 2xl:mt-10">
                  {data.industry_categories.map((category, index) => (
                    <div
                      key={index}
                      className="px-[24px] py-[10px] bg-white text-center card-shadow rounded-full border border-transparent transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-105"
                    >
                      <p className="text-[14px] poppins-font">{category.label}</p>
                    </div>
                  ))}
                </div>


        </div>

          <div className="w-11/12 sm:w-[80%] 2xl:w-[65%] 2xl:mt-20 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {industriesData.map((item, index) => {
              const CardIcon = item.icon ? clientIcons[item.icon.trim()] : Heart; 
              return (
                <div key={index} className="
                  glass-panel2 p-5 rounded-xl
                  border border-transparent
                  transform transition-all duration-500 ease-in-out hover:-translate-y-3
                  group
                  cursor-pointer
                "
                  style={{
                    '--card-border': item.highlight_color,
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <div
                    className="w-[60px] h-[60px] rounded-[10px] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: item.highlight_color + "10",
                      color: item.highlight_color,
                    }}
                  >
                    {CardIcon && React.createElement(CardIcon, { size: 34 })}
                  </div>

                  <h4 className="montserrat-font text-[24px] font-semibold py-3">
                    {item.title}
                  </h4>

                  <ul className="list-disc px-5 text-gray-500">
                    {item.key_features.map((point, i) => (
                      <li className='text-[15px] mt-1' key={i}>{point.label}</li>
                    ))}
                  </ul>

                  <p
                    className="w-fit py-1 px-2 rounded-full text-[12px] poppins-font mt-8"
                    style={{
                      background: item.highlight_color + "10",
                      color: item.highlight_color,
                    }}
                  >
                    {item.highlight_text}
                  </p>
                </div>
              );
            })}
          </div>
    </div>
  )
}

export default HomeIndustry
