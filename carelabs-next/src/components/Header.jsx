"use client";
import { GET_NAVBAR } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import { ChevronDown, ChevronUp, Globe, Mail, Moon, X ,ArrowRight} from 'lucide-react';
import React, { useEffect, useState } from 'react'
import RegionModal from './RegionModal';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';


const Header = () => {
    const [navbarData,setNavbarData]=useState();
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedSubmenuIndex, setSelectedSubmenuIndex] = useState(0);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Global");
    const [isContactModalOpen,setIsContactModalOpen] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false);

    const activeSubmenu =
      navbarData?.items?.[activeIndex]?.submenus?.[selectedSubmenuIndex];
    const ActiveIcon = activeSubmenu ? LucideIcons[activeSubmenu.icon] : null;


    const regions = [
        "Global",
        "Middle East & Africa",
        "Asia-Pacific",
        "Europe",
        "Americas",
      ];
    
      const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
      };


    const openMobilemenus = () => {
      console.log("TETEE");
      
      setOpenMobileMenu(!openMobileMenu);
    }

    


     const fetchNavbarData = async () => {
        try{
          const res= await client.query({
                      query: GET_NAVBAR,
                    });

            const allSlugs =
          res.data.navbar.items
        ?.flatMap(item => item.submenus || [])
        ?.map(sub => sub.slug);

          console.log("Navbar data:", allSlugs);
          setNavbarData(res.data.navbar);

        }catch(err){
          console.log("Error fetching navbar data:", err);
        }
      }


      useEffect(() => {
        fetchNavbarData();

        if (typeof window !== "undefined") {
        window.openContactModal = () => setIsContactModalOpen(true);
       }

      
      }, []);
      
      //cloudFlare
      useEffect(()=> {
        const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
       };
      },[])

      useEffect(() => {
  if (isContactModalOpen) {
    setTimeout(() => {
      if (window.turnstile) {
        window.turnstile.render("#cf-captcha", {
          sitekey: "0x4AAAAAAA_eaDkiLVUQBCGg",
          theme: "light",
        });
      }
    }, 100);
  }
}, [isContactModalOpen]);


if (!navbarData) {
  return (
    <div className="w-full bg-gray-100 flex items-center justify-center h-[80px] gap-3 p-2">
      <div className="w-[10%] h-full rounded-md bg-gray-300 animate-pulse"></div>
      <div className="w-[60%] h-full rounded-md bg-gray-300 animate-pulse"></div>
      <div className="w-[20%] h-full rounded-md bg-gray-300 animate-pulse"></div>
    </div>
  );
}


  return (
      <>
        <div className="headCvr w-full h-[80px] flex items-center justify-center navbar-shadow fixed z-50 header-background">
          <div className="header w-full  h-full flex items-center justify-between lg:justify-center 2xl:w-[80%] 2xl:p-3 ">

            <div className="logo flex item center justify-center w-[50%] sm:w-[40%]  lg:w-[22%] ">
              <a href="/">
                <img className=' p-3 md:w-[60%] lg:w-[75%]' src={navbarData.Logo?.url} alt="Logo" />
              </a>
            </div>

            <div className="menuList hidden lg:flex lg:w-[60%] xl:w-[38%] lg:justify-center h-full">
                <ul className='flex text-[14px] font-medium justify-evenly items-center gap-6 w-[95%] p-3'>
                {navbarData.items.map((item, index) => (
                  // <li
                  //   key={item.id}
                  // onMouseEnter={() => {
                  //     setActiveIndex(index);
                  //     setSelectedSubmenuIndex(0); 
                  //   }}

                  //   className="cursor-pointer"
                  // >
                  //   {item.label}
                  // </li>

                  <li 
                    key={item.id}
                    className="relative flex items-center lg:gap-0 2xl:gap-2 cursor-pointer group hover:text-[#1f7fdb] transition-colors duration-300"
                    onMouseEnter={() => {
                      if (item.submenus?.length > 0) {
                        setActiveIndex(index);
                        setSelectedSubmenuIndex(0);
                      }
                    }}
                    onClick={() => {
                      if (!item.submenus || item.submenus.length === 0) {
                        setActiveIndex(null); 
                        setSelectedSubmenuIndex(0);
                        window.location.href = item.slug || "/blogs";
                      }
                    }}
                  >
                    {item.label}

                    {/* Only show chevron for first 3 items */}
                    {index < 3 && item.submenus?.length > 0 && (
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180"
                      />
                    )}
                    
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f7fdb] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>

            </div>
                

            <div className="nav-Container h-full flex items-center gap-5
            lg:justify-center lg:w-[30%] lg:gap-3
            2xl:justify-end 2xl:pe-[5%]">
                    <button
                  onClick={() => setIsModalOpen(true)}
                  className="global hidden sm:flex items-center justify-center gap-2 px-2 py-2 rounded-4xl border border-gray-300 hover:border-blue-400 w-24"
                >
                  <Globe size={16} />
                  <p className="text-[14px] font-medium">{navbarData?.regionSelector}</p>
                </button>


               <div className="mob-global flex sm:hidden">
              <button onClick={() => setIsModalOpen(true)}>
                <Globe />
              </button>
            </div>

                  <div className="theme hidden">
                    <button className='bg-[#2575B626] border border-[#2575b64d]  w-[50px] h-[50px] flex items-center justify-center sm:p-3 rounded-full '>
                <a href="/services" style={{color:"#2575b6"}}> <Moon  /></a>
              </button>
                  </div>

                  {/* <div className="nav-bttn hidden lg:flex justify-center items-center rounded-md xl:w-[35%] 2xl:w-[45%] bg-[#157de5]">
                    <button className=' text-sm lg:py-[10px] lg:px-3 ' >
                      <a href={navbarData?.buttonlink} className='text-[14px] text-white font-medium'>{navbarData?.buttontext}</a>
                    </button>
                  </div> */}

                  <div className="nav-bttn hidden lg:flex justify-center items-center rounded-md xl:w-[35%] 2xl:w-[45%] bg-[#157de5]">
                    <button className="text-sm lg:py-[10px] lg:px-3"onClick={() => setIsContactModalOpen(true)}>
                      <span className="text-[14px] text-white font-medium">
                        {navbarData?.buttontext}
                      </span>
                    </button>
                  </div>


          



                  <div
                className="menu-bar w-[15%] h-full flex items-center justify-center p-2 z-[999] lg:hidden"
                onClick={openMobilemenus}
              >
                {openMobileMenu ? (
                  <i className="fa-solid fa-x fa-xl" style={{ color: "#000000" }}></i>
                ) : (
                  <i className="fa-solid fa-bars fa-xl" style={{ color: "#000000" }}></i>
                )}
              </div>


            </div>

          </div>
        </div>


        {activeIndex !== null &&
          navbarData.items[activeIndex]?.submenus?.length > 0 && (
            <div className="sub-menu-cards absolute top-[80px] w-full flex justify-center z-50"
            >

              <div className="w-[65%] h-[500px] bg-white mt-2 rounded-2xl flex items-center justify-evenly p-6 navbar-shadow fixed"
              onMouseLeave={() => setActiveIndex(null)}>

                {/* LEFT SECTION */}
                <div className="w-[35%] h-full">
                  <h2 className="font-bold text-sm text-[#111827] mb-3">
                    {navbarData.items[activeIndex].heading}
                  </h2>

                  {navbarData.items[activeIndex].submenus.map((submenu, index) => {
                    const IconComponent = LucideIcons[submenu.icon];
                    return (
                      <div 
                        key={submenu.id} 
                        className={`flex items-center gap-3 p-3 rounded-l-2xl cursor-pointer
                          ${selectedSubmenuIndex === index ? "border-l-4 border-[#157de5]" : ""}`}
                        onClick={() => setSelectedSubmenuIndex(index)}
                      >
                      
                        {IconComponent && (
                          <IconComponent 
                           style={
                            selectedSubmenuIndex === index
                              ? { animation: "blink 0.25s infinite" }
                              : {}
                          }
                            className={`w-5 h-5 
                              ${selectedSubmenuIndex === index 
                                ? "text-[#FF7038] blink" 
                                : "text-[#157de5]"
                              }`} 
                          />
                        )}

                        <div>
                          <h3 className="font-semibold">{submenu.title}</h3>
                          <p className="text-sm text-gray-600">View Details</p>
                        </div>

                      </div>
                    );
                    // <div 
                    //   key={submenu.id} 
                    //   className={`p-3 rounded-l-2xl cursor-pointer 
                    //     ${selectedSubmenuIndex === index ?" border-l-4 border-blue-500" : ""}`}
                    //   onClick={() => setSelectedSubmenuIndex(index)}
                    // >
                    //   <h3 className="font-semibold">{submenu.title}</h3>
                    //   <p className="text-sm text-gray-600">View Details</p>
                    // </div>
                  })}

                  
                </div>

                {/* RIGHT SECTION */}
                <div className="w-[55%] h-full card-shadow rounded-2xl">
                
                    <div  className="p-5 flex flex-col">

                      <div className=" w-full flex items-center gap-3">
                        {ActiveIcon && (
                          <ActiveIcon className="w-5 h-5 text-[#157de5]" />
                        )}
                        <h3 className="text-[14px] w-[15%] text-center p-1 rounded-full text-blue-600 bg-blue-200">{navbarData.items[activeIndex].badge}</h3>
                      </div>
                    

                        <div className="py-4">
                          <p className="text-2xl font-bold  text-black">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].title}</p>
                          <hr  className="w-[15%] rounded-full h-1 mt-1 gradient-bg border-none" />
                        </div>
                    

                        <p className="text-sm  text-gray-600 py-4">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].subtitle}</p>

                        <div className="py-5">
                          <p className="text-sm font-bold  text-gray-800">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].featureheading}</p>
                          {navbarData.items[activeIndex].submenus[selectedSubmenuIndex].features.map((feature) => (
                            <div key={feature.id} className="flex items-center gap-2 mt-2">
                              <i className="fa-solid fa-circle fa-2xs text-blue-500"></i>
                              <p className="text-sm text-gray-600">{feature.name}</p>
                            </div>
                          ))}
                        </div>
                  
                    <Link 
                        href={`/services/${navbarData.items[activeIndex].submenus[selectedSubmenuIndex].slug}`}
                        className="group relative inline-flex items-center justify-center bg-[#157de5] text-white text-[14px] font-semibold py-2 px-4 rounded-full w-[45%] text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#157de5] hover:to-[#ff7038] hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
                      >
                        <span className="flex items-center gap-2">
                          {navbarData.items[activeIndex].submenus[selectedSubmenuIndex].Button}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>

                    
                      {/* <Link
                        //href={finalURL}
                        className="group relative inline-flex items-center justify-center bg-[#157de5] text-white text-[14px] font-semibold py-2 px-4 rounded-full w-[45%] text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#157de5] hover:to-[#ff7038] hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
                      >
                        <span className="flex items-center gap-2">
                          {submenu.Button}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link> */}
                    

                    </div>
                  
                </div>

              </div>

            </div>
          )
        }


        {/* Mobile Bar  Menus */}
        {openMobileMenu && (
          <div className="w-full h-max bg-gray-100  fixed flex items-center top-[80px] z-[1000] justify-center p-3 lg:hidden">
            <div className="bg-white w-[90%] h-[90%] rounded-2xl p-4 md:w-[80%] md:flex md:justify-center md:flex-col md:items-center">
              <ul className="md:text-center">
                {navbarData.items.map((item) => (
                  <li key={item.id} className="py-2 md:px-4">
                    {item.label}
                  </li>
                ))}
              </ul>

              <div className="w-full flex items-center justify-center py-2">
                <button className="bg-blue-500 w-full md:w-[80%] p-2 rounded-lg" onClick={() => setIsContactModalOpen(true)}>
                  <a
                    href={navbarData?.buttonlink}
                    className="text-[14px] text-white p-3"
                  >
                    {navbarData?.buttontext}
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Globe Modal */}

             {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[30%] rounded-2xl shadow-xl p-6 bg-white">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-100 "
            >
              <X size={24} />
            </button>

            <div className="text-center flex  flex-col items-center justify-center xl:flex-row gap-2 mb-6">
              
              <Globe size={24} className="xl:mt-2 text-blue-600 mb-3" />
              <h2 className="text-xl font-semibold">Explore Carelabs in your region</h2>
            </div>

            {/* SELECT DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 pr-10 flex justify-between items-center"
            >
              {selectedRegion}

              <ChevronDown
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border overflow-hidden z-10">
                {regions.map((region) => (
                  <li
                    key={region}
                    onClick={() => {
                      setSelectedRegion(region);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {region}
                  </li>
                ))}
              </ul>
            )}
          </div>


            <p className="text-center text-sm text-gray-600 p-3">
              You're viewing: <span className="font-semibold">{selectedRegion} site</span>
            </p>
            <div className=" w-full flex items-center justify-center">
                <p className='text-sm'>
                  Go to: www.carelabs.com
                </p>
                 <Mail size={14} />
            </div>
              
          </div>
        </div>

        
         

         )}

           {/* Contact Modal */}

{/* {isContactModalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 z-[2000]"
    onClick={(e) => e.target === e.currentTarget && setIsContactModalOpen(false)}
  >
    <div className="relative w-full max-w-[650px] lg:max-w-[700px] rounded-2xl shadow-xl bg-white overflow-hidden">
      
      
      <div className="max-h-[85vh] overflow-y-auto scrollbar-hide px-6 py-8 md:px-12 md:py-10">
        
        <button
          onClick={() => setIsContactModalOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} />
        </button>

        
        <div className="flex justify-center mb-4">
          <div className="text-2xl font-bold">
            <span className="text-blue-600">care</span>
            <span className="text-orange-500">labs</span>
          </div>
        </div>

        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          Connect with Us!
        </h2>

        <p className="text-center text-sm text-gray-600 mb-6">
          Please complete the form to schedule a <span className="text-orange-500 font-semibold">FREE</span> consultation.
        </p>

        <form 
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = {
              "Contact Name": formData.get("contactName"),
              "Company Name": formData.get("companyName"),
              "Country": formData.get("country"),
              "Email": formData.get("email"),
              "Phone": `${formData.get("countryCode")}${formData.get("phone")}`,
              "Services": formData.get("services"),
              "Issue Faced": formData.get("issueFaced")
            };

            // Create query string
            const queryString = new URLSearchParams(data).toString();
            const webhookUrl = `https://shahariyar.app.n8n.cloud/webhook/8720-cms-lead-v1?${queryString}`;

            try {
              const response = await fetch(webhookUrl, {
                method: 'GET',
              });

              if (response.ok) {
                alert('Form submitted successfully!');
                setIsContactModalOpen(false);
                e.target.reset();
              } else {
                alert('Failed to submit form. Please try again.');
              }
            } catch (error) {
              console.error('Error submitting form:', error);
              alert('An error occurred. Please try again.');
            }
          }}
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                placeholder="Your First & Last Name"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Your Company Name"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  name="country"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white appearance-none pr-10 transition-colors"
                >
                  <option value="">Select your Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
              
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  defaultValue="+1"
                  className="w-14 px-2 py-2.5 text-sm text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none flex-shrink-0 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="123456789"
                  required
                  className="flex-1 min-w-0 px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Services <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="services"
                placeholder="Services you're interested in"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              />
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Issue Faced <span className="text-red-500">*</span>
            </label>
            <textarea
              name="issueFaced"
              placeholder="Please describe the issue you're facing"
              rows={4}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none transition-colors"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors duration-200 mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
)} */}


  {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setIsContactModalOpen(false)}
        >
          <div className="relative w-full max-w-[650px] lg:max-w-[700px] rounded-2xl shadow-xl bg-white overflow-hidden">

            <div className="max-h-[85vh] overflow-y-auto scrollbar-hide px-6 py-8 md:px-12 md:py-10">

              <button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>

              
              <div className="flex justify-center mb-6">
                {/* <div className="text-2xl font-bold">
                  <span className="text-blue-600">care</span>
                  <span className="text-orange-500">labs</span>
                </div> */}
                <img
                 src="https://accessible-comfort-314cd1c7f5.media.strapiapp.com/carelab_logo_c9660c1289.png"
                 alt="Carelabs Logo"
                 className="h-12 w-auto object-contain" 
                 />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                Connect with Us!
              </h2>

              <p className="text-center text-sm text-gray-600 mb-6">
                Please complete the form to schedule a <span className="text-orange-500 font-semibold">FREE</span> consultation.
              </p>

              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  

                  // -------------------------------
                  // Correctly Fetch Turnstile Token
                  // -------------------------------
                  const token = document.querySelector(
                    "input[name='cf-turnstile-response']"
                  )?.value;

                  if (!token) {
                    alert("Please complete the CAPTCHA");
                    return;
                  }

                  setIsSubmitting(true);

                  const formData = new FormData(e.target);

                  const data = {
                    "Contact Name": formData.get("contactName"),
                    "Company Name": formData.get("companyName"),
                    "Country": formData.get("country"),
                    "Email": formData.get("email"),
                    "Phone": `${formData.get("countryCode")}${formData.get("phone")}`,
                    "Services": formData.get("services"),
                    "Issue Faced": formData.get("issueFaced"),
                    "cf_token": token,
                  };

                  const queryString = new URLSearchParams(data).toString();
                  //const webhookUrl = `https://shahariyar.app.n8n.cloud/webhook/8720-cms-lead-v1?${queryString}`;
                  const webhookUrl = `https://sreyasteam.app.n8n.cloud/webhook/formsubmission?${queryString}`;
                  //const webhookUrl = `https://sreyasteam.app.n8n.cloud/webhook-test/formsubmission?${queryString}`;
                  

                  try {
                    const response = await fetch(webhookUrl, { method: "GET" });

                    if (response.ok) {
                      alert("Form submitted successfully!");
                      setIsContactModalOpen(false);
                      e.target.reset();
                    } else {
                      alert("Failed to submit form. Please try again.");
                    }
                  } catch (error) {
                    console.error("Error submitting form:", error);
                    alert("An error occurred. Please try again.");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      placeholder="Your First & Last Name"
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Your Company Name"
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors leading-tight"
                    >
                      <option value="">Select your Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                     
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  name="country"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white appearance-none pr-10 transition-colors"
                >
                  <option value="">Select your Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
              
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              />
            </div>
          </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="countryCode"
                        defaultValue="+1"
                        className="w-14 px-2 py-2.5 text-sm text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="123456789"
                        required
                        className="flex-1 px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Services <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="services"
                      placeholder="Services you're interested in"
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Issue Faced <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="issueFaced"
                    placeholder="Please describe the issue you're facing"
                    rows={4}
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 resize-none focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div
                  className="cf-turnstile mt-4"
                  data-sitekey="0x4AAAAAAA_eaDkiLVUQBCGg"
                  data-theme="light"
                  id="cf-captcha"
                ></div>

                {/* <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors duration-200 mt-6 focus:border-orange-500 focus:outline-none transition-colors"
                >
                  Submit
                </button> */}
                
                <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-semibold py-3 rounded-md transition-colors duration-200 mt-6
                ${isSubmitting 
                ? "bg-orange-300 cursor-not-allowed" 
                : "bg-orange-500 hover:bg-orange-600"
                }`}
                >
                {isSubmitting ? "Submitting..." : "Submit"}
                </button>

              </form>

            </div>
          </div>
        </div>
      )}


      </>


  )
}

export default Header
