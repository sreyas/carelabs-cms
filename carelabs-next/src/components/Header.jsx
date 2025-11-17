"use client";
import { GET_BLOG, GET_NAVBAR } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const [navbarData,setNavbarData]=useState();

  const openMenus =()=>{
    setMenuOpen(!menuOpen);
  }

  const fetchNavbarData = async () => {
    try{
      const res= await client.query({
                  query: GET_NAVBAR,
                 });

     

      console.log("Navbar data:", res.data.navbar);
      setNavbarData(res.data.navbar.Logo);

    }catch(err){
      console.log("Error fetching navbar data:", err);
    }
  }

  useEffect(() => {
    fetchNavbarData();
  }, []);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 640) {
      setMenuOpen(false);
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <>
      <div className='header-cvr bg-[#0d1222f2]  w-full h-[80px] flex items-center justify-center  fixed top-0 z-50'>
    <div className="header w-full h-full flex justify-between items-center lg:px-10   ">


          <div className="logo w-[60%] h-full flex items-center justify-center p-3 sm:p-0 md:w-[40%] lg:w-[50%]">
          <img className='h-[60%]' src={navbarData?.url||"https://carelabz.com/wp-content/uploads/2016/04/Carelabs-logo.jpg"} alt="" />
        </div>

        <div className="menubar p-3 md:hidden" onClick={openMenus}>
          {menuOpen ? (
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "white" }}></i>
        ) : (
          <i className="fa-solid fa-bars fa-2xl" style={{ color: "white" }}></i>
        )}
        </div>

         <div className="menus hidden h-full md:flex  md:w-[60%] lg:py-2 ">
          <ul className='flex h-full w-full items-center justify-evenly md:justify-center text-white fontz font-bold'>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Home</li>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Services</li>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Impact</li>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Blog</li>
          <li className='text-center text-[16px]  p-3'>
            <button className='gradient-bg px-4 py-2 rounded-[6px]'>Enquire  Now</button>
          </li>
          </ul> 
        </div>

    </div>


      </div>



     {menuOpen && (
       <div className="menu-list w-full absolute h-fit right-0 top-[80px]  ">
        <ul className=' bg-[#0d1222f2] text-white p-3 fontz'>
          {/* <li className='text-end text-3xl p-3' onClick={openMenus}><i className="fa-solid fa-xmark fa-lg"></i></li> */}
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Home</li>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Services</li>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Impact</li>
          <li className='text-center text-[16px] hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Blog</li>
          <li className='text-center text-[16px]  p-3'>
            <button className='gradient-bg px-3 py-1 rounded'>Enquire Now</button>
          </li>
        </ul>
      </div>
     )}
    </>

  )
} 

export default Header
