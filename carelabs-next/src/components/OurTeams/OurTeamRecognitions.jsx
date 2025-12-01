

import { Award, Building } from 'lucide-react';
import React from 'react'

const certifications = [
  { name: "IEC"  },
  { name: "NFPA"  },
  { name: "IEEE"  },
  { name: "CSA"  },
  { name: "UL/UNI0" },
  { name: "Canada" },
];

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

const OurTeamRecognitions = () => {
  return (
    <div>
       <section className="w-full flex items-center justify-center">
      <div className=" w-[85%] p- rounded-2xl mt-10
            2xl:w-[65%]">
        <div className="bg-card rounded-2xl p-8 sm:p-12 glass-panel border border-border">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Recognitions & Affiliations
              </h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg">
              Trusted by utilities, industrial facilities, and global auditors.
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12">
            {certifications.map((cert, index) => {
             
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 glass-panel  rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30"
                >
                 <Building color='#2575b6'/>
                  <span className="text-xs font-semibold text-foreground mt-4">
                    {cert.name}
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
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-border last:border-b-0 transition-colors hover:bg-secondary/50 px-4 rounded-lg"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-0">
                  {affiliation.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{affiliation.location}</span>
                  <span className="text-border">•</span>
                  <span>{affiliation.year}</span>
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
