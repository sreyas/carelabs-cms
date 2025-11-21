"use client";

import React, { useState, useEffect } from 'react';

const QuoteBar = () => {
  const [showBar, setShowBar] = useState(false);

  const controlBar = () => {
    const currentScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (currentScrollY >= viewportHeight) {
      setShowBar(true); // Show bar after scrolling past 100vh
    } else {
      setShowBar(false); // Hide bar before 100vh
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlBar);
    return () => window.removeEventListener('scroll', controlBar);
  }, []);

  return (
    <div
      className={`w-full fixed bottom-0 mb-5 z-[999] flex items-center justify-center p-2 transition-transform duration-300 ${
        showBar ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[65%] quotes-background h-auto sm:h-[100px] rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between p-4 sm:p-5 gap-3 card-shadow">
        
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
          <p className='text-lg sm:text-xl font-bold'>
            Ready to power your next project with global expertise?
          </p>
          <p className='text-sm sm:text-base'>
            Get a custom quote from our certified engineers
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center justify-center sm:justify-end">
          <button className='px-4 sm:px-5 py-2 bg-amber-500 rounded-full text-sm sm:text-base'>
            <a href="">Request a Quote</a>
          </button>
          <button className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center'>
            <a href="">
              <i className="fa-solid fa-arrow-up text-black"></i>
            </a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default QuoteBar;
