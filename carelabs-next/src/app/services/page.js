import ServicesLanding from '@/components/ServicesLanding'
import React from 'react'

const page = () => {
  return (
    <div>
        <section>
            <ServicesLanding/>
        </section>

        <section>
            <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-10">
                
                <div className="w-full mt-10 lg:mt-0 sm:w-[90%] lg:w-[70%] flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">

                {/* Card 1 */}
                <div className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white flex flex-col items-start gap-3 rounded-2xl card-shadow">
                    <p>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>
                    </p>
                    <p className="text-xl font-bold">What It Covers</p>
                    <p className="text-sm text-gray-700">
                    Load flow, short-circuit, protection coordination, motor starting, arc-flash inputs, and power quality analysis
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white flex flex-col items-start gap-3 rounded-2xl card-shadow">
                    <p>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>
                    </p>
                    <p className="text-xl font-bold">What It Covers</p>
                    <p className="text-sm text-gray-700">
                    Load flow, short-circuit, protection coordination, motor starting, arc-flash inputs, and power quality analysis
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white flex flex-col items-start gap-3 rounded-2xl card-shadow">
                    <p>
                    <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>
                    </p>
                    <p className="text-xl font-bold">What It Covers</p>
                    <p className="text-sm text-gray-700">
                    Load flow, short-circuit, protection coordination, motor starting, arc-flash inputs, and power quality analysis
                    </p>
                </div>

                </div>

            </div>
        </section>

        <section>
        <div className="w-full min-h-[600px] flex items-center justify-center px-4 py-10">
            <div className="w-full sm:w-[90%] lg:w-[75%] flex flex-col lg:flex-row items-start justify-center gap-8">

            {/* --- Card 1 --- */}
            <div className="w-full lg:w-[45%] flex flex-col gap-5 rounded-2xl bg-white p-6 sm:p-8 card-shadow">

                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-red-300">
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
                </div>

                <p className="text-2xl sm:text-3xl font-bold">
                Why Power System Analysis Matters
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                Without proper analysis, electrical systems face hidden risks that can lead to catastrophic failures, safety incidents, and costly downtime.
                </p>

                {/* List */}
                <div className="flex flex-col gap-3">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="flex gap-2 text-sm sm:text-base">
                    <i className="fa-solid fa-angle-right fa-lg"></i>
                    <p>Equipment damage from undetected overloads</p>
                    </div>
                ))}
                </div>

            </div>

            {/* --- Card 2 --- */}
            <div className="w-full lg:w-[45%] flex flex-col gap-5 rounded-2xl bg-white p-6 sm:p-8 card-shadow">

                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-blue-300">
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
                </div>

                <p className="text-2xl sm:text-3xl font-bold">
                What Carelabs Delivers
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                Our comprehensive studies provide the insights and recommendations you need to operate safely, efficiently, and in full compliance.
                </p>

                {/* List */}
                <div className="flex flex-col gap-3">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="flex gap-2 text-sm sm:text-base">
                    <i className="fa-regular fa-circle-check fa-xl"></i>
                    <p>Equipment damage from undetected overloads</p>
                    </div>
                ))}
                </div>

            </div>

            </div>
        </div>
        </section>

      
      
    </div>
  )
}

export default page
