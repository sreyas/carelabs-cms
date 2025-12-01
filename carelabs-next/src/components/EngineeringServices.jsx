"use client";

//import { Zap, Activity, Target } from "lucide-react";
import * as LucideIcons from "lucide-react";


// const services = [
//   {
//     icon: Zap,
//     title: "Arc-Flash Analysis",
//     description: "Comprehensive hazard assessment and PPE labeling",
//   },
//   {
//     icon: Activity,
//     title: "Electrical Testing",
//     description: "On-site testing of switchgear, relays, and protection devices",
//   },
//   {
//     icon: Target,
//     title: "Thermography Inspection",
//     description: "Infrared imaging to detect hotspots and prevent failures",
//   },
// ];

export default function EngineeringServices({ service }) {
  return (
    // <section>
    //   <div className="min-h-[80vh] w-full flex items-center justify-center py-16">
    //     <div className="w-[95%] md:w-[85%] lg:w-[70%] py-10 rounded-4xl  flex flex-col items-center bg-card">

    //       {/* TOP TITLE */}
    //       <div className="w-full flex items-center justify-center text-center mb-10 px-4">
    //         <div className="flex flex-col items-center gap-3">
    //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
    //             Related Engineering Services
    //           </h2>
    //           <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] text-center text-muted-foreground">
    //             Comprehensive electrical engineering solutions to support your
    //             facility's safety, reliability, and compliance goals.
    //           </p>
    //         </div>
    //       </div>

    //       {/* MAIN CONTENT AREA - Services Grid */}
    //       <div className="w-[80%] xl:w-full px- grid grid-cols-1  xl:grid-cols-3 gap-6">
    //         {services.map((service, index) => {
    //           const Icon = service.icon;
    //           return (
    //             <div
    //               key={index}
    //               className="bg-background rounded-2xl p-8 card-hover flex flex-col items-start gap-4 navbar-shadow"
    //             >
    //               <div className="w-14 h-14 rounded-full bg-icon-bg flex items-center justify-center">
    //                 <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
    //               </div>

    //               <h3 className="text-xl font-bold text-foreground">
    //                 {service.title}
    //               </h3>

    //               <p className="text-muted-foreground">{service.description}</p>
    //             </div>
    //           );
    //         })}
    //       </div>

    //     </div>
    //   </div>
    // </section>

    <section>
      <div className="min-h-[80vh] w-full flex items-center justify-center py-16">
        <div className="w-[95%] md:w-[85%] lg:w-[70%] py-10 rounded-4xl flex flex-col items-center bg-card">

          {/* TOP TITLE */}
          <div className="w-full flex items-center justify-center text-center mb-10 px-4">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                {service?.relatedTitle}
              </h2>

              <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] text-center text-muted-foreground">
                {service?.relatedSubtitle}
              </p>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="w-[80%] xl:w-full grid grid-cols-1 xl:grid-cols-3 gap-6">
            {service?.relatedServices?.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 card-hover flex flex-col items-start gap-4 navbar-shadow"
              >
                {/* ICON BOX */}
                <div className="w-14 h-14 rounded-full bg-icon-bg flex items-center justify-center">
                  {/* If Strapi gives icon name, use <i> */}
                    
                  <i className={item.icon || "fa-solid fa-bolt text-primary"}></i>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-foreground">
                  {item.label}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

    
  );
}
