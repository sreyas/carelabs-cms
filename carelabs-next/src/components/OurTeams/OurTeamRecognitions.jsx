

import React from 'react'
import * as Icons from "lucide-react";


const affiliations = [
  {
    title: "Certified Thermography Team",
    location: "International",
    year: "2019",
  },
  {
    title: "Member - Safety Association",
    location: "GCC",
    year: "2016",
  },
  {
    title: "IEC Compliance Partner",
    location: "Global",
    year: "2020",
  },
  {
    title: "NFPA Certified Professionals",
    location: "North America",
    year: "2021",
  },
  {
    title: "IEEE Member Organization",
    location: "Global",
    year: "2018",
  },
  {
    title: "CSA Standards Contributor",
    location: "Canada",
    year: "2022",
  },
];

const OurTeamRecognitions = ({data}) => {
  if(!data)return null;

    const IconComponent = Icons[data.icon.trim()];
    const certifications=data.Recognitions_Item1 ||  [];
    const affiliations=data.Recognitions_Item2 || [];
    console.log("certifications",certifications);
    


  return (
    <div>
       <section className="w-full flex items-center justify-center lg:mt-20">
      <div className=" w-[85%] p- rounded-2xl mt-10
            2xl:w-[65%]">
        <div className="bg-card rounded-2xl p-8 sm:p-12 glass-panel border border-border">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
               <IconComponent  className="w-6 h-6 text-accent secondary-color" />
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground"
                dangerouslySetInnerHTML={{ __html: data.title }}>
              
              </h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg">
             {data.description}
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12">
            {certifications.map((cert, index) => {
              const iconName = cert.icon.trim(); 
               const IconComponent = Icons[iconName]
             
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 glass-panel  rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30"
                >
                 <IconComponent className="primary-color"/>
                  <span className="text-xs font-semibold text-foreground mt-4">
                    {cert.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Affiliations List */}
          <div className="space-y-4">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-[#65758b] hover:bg-secondary/50 px-4 rounded-lg"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-0">
                  {affiliation.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground para-text">
                  <span>{affiliation.countryyear}</span>
                  {/* <span className="text-border">•</span>
                  <span>{affiliation.}</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default OurTeamRecognitions
