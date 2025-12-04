import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'
import * as Icons from "lucide-react"; 

const OurTeamsAction = ({data}) => {
   if(!data)return null;


   return (
    <div>
         <div className='w-full flex flex-col items-center justify-center mt-20'>
              <div className="flex flex-col w-[85%] p-5 text-center
                      2xl:w-[50%]    ">
                          <h2 className='text-[30px] montserrat-font font-semibold mb-4'
                            dangerouslySetInnerHTML={{ __html: data.title }}
                           ></h2>
                          <p className='text-[18px]   para-text  poppins-font'>{data.description}</p>
                      </div>
      
                    <div className="flex flex-col w-[85%]  rounded-2xl mt-10 
                        2xl:w-[65%]">

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {data?.Teams_in_Action_Items?.map((item, index) => {

        // Fetch icon dynamically
        const IconComponent = Icons[item.icon] || Icons.Zap;

        // Backend Image or Local fallback
        const imageUrl = item.image?.url
          ? item.image.url
          : carelabzImage.src;

        return (
          <div
            key={index}
            className="relative w-full h-[400px] lg:h-[550px] rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full gap-4">

              {/* Top Block */}
              <div>
                <div className="w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-xl flex items-center justify-center quotes-background mb-3">
                  <IconComponent color="white" size={32} />
                </div>

                <h2 className="text-white montserrat-font font-semibold">
                  {item.title}
                </h2>
              </div>

              {/* Points */}
              <div>
                {item.Teams_in_Action_Points?.map((p, idx) =>
                  p.points ? (
                    <div
                      key={idx}
                      className="flex items-center mb-3 gap-3"
                    >
                      <Icons.Dot size={45} color="#FF7038" />
                      <p className="poppins-font text-[14px] text-white">
                        {p.points}
                      </p>
                    </div>
                  ) : null
                )}
              </div>

            </div>
          </div>
        );
      })}

    </div>
                    </div>       
             </div>
    </div>
  )
}

export default OurTeamsAction
