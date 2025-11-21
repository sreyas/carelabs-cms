import React from "react";

const ServicesLanding = () => {
  return (
    <div className="w-full min-h-[80vh] pt-[80px] flex justify-center px-4 ">
      <div className="w-full 2xl:w-[70%] flex flex-col lg:flex-row mt-12 gap-10 ">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 py-2 ">

          {/* Badge */}
          <div className="w-fit">
            <p className="px-4 py-2 text-xs sm:text-sm rounded-full text-center card-shadow bg-white">
              Engineering Excellence Since 2010
            </p>
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col gap-3">
           <div className=" w-[80%] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold ">
             <p className=" gradient-text ">
              Power System Analysis  
            </p>
            <p className="text-black "> for Safe, Reliable Networks</p>
           </div>

            <p className="w-[80%] text-sm sm:text-base lg:text-lg leading-7 text-gray-700">
              Comprehensive electrical studies to identify risks, optimize
              performance, and ensure compliance with international standards
              across all voltage levels.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-4">

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 sm:px-8 py-2 text-white rounded-lg text-sm bg-blue-600">
                Request a Study
              </button>

              <button className="px-6 sm:px-8 py-2 text-sm border-2 rounded-lg border-blue-500 bg-white text-gray-600">
                Download Sample Report
              </button>
            </div>

            <button className="px-6 sm:px-8 py-2 text-sm rounded-lg border-2 border-orange-400 text-gray-600
              lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
              Download Sample Report
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-[50%] flex justify-center ">
          <div
            className="
              w-full 
              h-[260px] 
              sm:h-[340px] 
              md:h-[420px] 
              lg:h-[480px] 
              rounded-4xl 
              relative 
              overflow-visible 
              shadow-lg
              2xl:mt-6
            "
            style={{
              backgroundImage: `url("https://preview--global-grid-glimpse.lovable.app/assets/hero-power-grid-BRAXB8uH.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent rounded-4xl"></div>

            {/* Floating Stats */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 
              w-[90%] sm:w-[80%] lg:w-[90%]
              flex items-center justify-between gap-3 p-3 z-20">

              <div className="bg-white w-1/3 py-4 rounded-lg text-start ps-3 shadow">
                <p className="text-lg text-blue-500 font-bold">500+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>

              <div className="bg-white w-1/3 py-4 rounded-lg text-start ps-3  shadow">
                <p className="text-lg text-blue-500 font-bold">500+</p>
                <p className="text-sm text-gray-600">Clients</p>
              </div>

              <div className="bg-white w-1/3 py-4 rounded-lg text-start ps-3  shadow">
                <p className="text-lg text-blue-500 font-bold">500+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesLanding;
