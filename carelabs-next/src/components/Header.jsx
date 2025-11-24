"use client";
import { GET_NAVBAR } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import { ChevronDown, ChevronUp, Globe, Mail, Moon, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import RegionModal from './RegionModal';

const Header = () => {
    const [navbarData,setNavbarData]=useState();
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedSubmenuIndex, setSelectedSubmenuIndex] = useState(0);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Global");

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
      }, []);
if (!navbarData) return null;
  return (
      <>
        <div className="headCvr w-full h-[80px] flex items-center justify-center navbar-shadow fixed z-50 header-background">
          <div className="header w-full  h-full flex items-center justify-between lg:justify-center 2xl:w-[80%] 2xl:p-3 ">

            <div className="logo flex item center justify-center w-[50%] sm:w-[40%]  lg:w-[22%] ">
              <img className=' p-3 md:w-[60%] lg:w-[75%]' src={navbarData.Logo?.url} alt="" />
            </div>

            <div className="menuList hidden lg:flex lg:w-[50%] xl:w-[38%] lg:justify-center h-full">
                <ul className='flex text-[14px] font-medium justify-evenly items-center gap-6 w-[90%] p-3'>
                {navbarData.items.map((item, index) => (
                  <li
                    key={item.id}
                  onMouseEnter={() => {
                      setActiveIndex(index);
                      setSelectedSubmenuIndex(0); 
                    }}

                  
                    className="cursor-pointer"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>

            </div>

            <div className="nav-Container h-full flex items-center gap-5 sm:gap-5 lg:justify-center lg:w-[40%] 2xl:justify-end 2xl:pe-[5%]">
                    <button
                  onClick={() => setIsModalOpen(true)}
                  className="global hidden sm:flex items-center justify-center gap-2 border px-2 py-1 rounded-4xl"
                >
                  <Globe />
                  <p className="text-[14px]">{navbarData?.regionSelector}</p>
                </button>


               <div className="mob-global flex sm:hidden">
              <button onClick={() => setIsModalOpen(true)}>
                <Globe />
              </button>
            </div>

                  <div className="theme">
                    <button className='bg-[#2575B626] border border-[#2575b64d]  w-[50px] h-[50px] flex items-center justify-center sm:p-3 rounded-full '>
                <a href="/services" style={{color:"#2575b6"}}> <Moon  /></a>
              </button>
                  </div>

                  <div className="nav-bttn hidden lg:flex justify-center items-center rounded-md xl:w-[35%] 2xl:w-[30%] bg-blue-500 ">
                    <button className=' text-sm lg:py-[10px] lg:px-3 ' >
                      <a href={navbarData?.buttonlink} className='text-[14px] text-white'>{navbarData?.buttontext}</a>
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
                  <h2 className="font-bold text-lg mb-3">
                    {navbarData.items[activeIndex].heading}
                  </h2>

                  {navbarData.items[activeIndex].submenus.map((submenu, index) => (
                    <div 
                      key={submenu.id} 
                      className={`p-3 rounded-l-2xl cursor-pointer 
                        ${selectedSubmenuIndex === index ?" border-l-4 border-blue-500" : ""}`}
                      onClick={() => setSelectedSubmenuIndex(index)}
                    >
                      <h3 className="font-semibold">{submenu.title}</h3>
                      <p className="text-sm text-gray-600">View Details</p>
                    </div>
                  ))}

                  
                </div>

                {/* RIGHT SECTION */}
                <div className="w-[55%] h-full card-shadow rounded-2xl">
                
                    <div  className="p-5 flex flex-col">

                      <div className=" w-full ">
                        <h3 className="text-[14px] w-[15%] text-center p-1 rounded-full text-blue-600 bg-blue-200">{navbarData.items[activeIndex].badge}</h3>
                      </div>
                    

                        <div className="py-4">
                          <p className="text-2xl font-bold  text-gray-600">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].title}</p>
                          <hr  className="w-[15%] rounded-full h-1 mt-1 gradient-bg border-none" />
                        </div>
                    

                      <p className="text-sm  text-gray-600 py-4">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].subtitle}</p>

                      <div className="py-5">
                        <p className="text-sm font-bold  text-gray-600">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].featureheading}</p>
                        {navbarData.items[activeIndex].submenus[selectedSubmenuIndex].features.map((feature) => (
                          <div key={feature.id} className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-circle fa-2xs text-blue-500"></i>
                            <p className="text-sm text-gray-600">{feature.name}</p>
                          </div>
                        ))}
                      </div>
                  

                      <button className='bg-blue-500 text-white py-2 px-4 rounded-full w-[40%]'>
                        <a href={`/services/${navbarData.items[activeIndex].submenus[selectedSubmenuIndex].slug}`}>
                        {navbarData.items[activeIndex].submenus[selectedSubmenuIndex].Button}
                        </a>
                      </button>



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
                <button className="bg-blue-500 w-full md:w-[80%] p-2 rounded-lg">
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







      </>


  )
}

export default Header
