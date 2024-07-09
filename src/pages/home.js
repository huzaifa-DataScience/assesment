import React, { useState, useEffect } from 'react';
import BeautifulTable from '../components/table';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [isSlidUp, setIsSlidUp] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleImageClick = () => {
    setIsSlidUp(true);
  };

  const handleUpButtonClick = () => {
    setFadeIn(false);
    const fadeOutTimer = setTimeout(() => {
      setShowTable(false);
      setIsSlidUp(false);
    }, 500); // 
    return () => clearTimeout(fadeOutTimer);
  };

  useEffect(() => {
    if (isSlidUp) {
      const timer = setTimeout(() => {
        setShowTable(true);
      }, 500); // Adjusted time to match the animation

      return () => clearTimeout(timer);
    }
  }, [isSlidUp]);

  useEffect(() => {
    if (showTable) {
      const fadeInTimer = setTimeout(() => {
        setFadeIn(true);
      }, 50);
      return () => clearTimeout(fadeInTimer);
    }
  }, [showTable]);

  return (
    <div className='relative flex flex-col items-center w-screen h-screen overflow-hidden'>
      <div className={`absolute inset-0 ${isSlidUp ? 'z-0' : 'z-10'}`}>
        <div 
          onClick={handleImageClick} 
          className={`transition-transform duration-[1.5s] ease-in-out ${isSlidUp ? '-translate-y-full' : 'translate-y-0'}`}
        > 
          <img
            className='w-screen h-screen flex'
            src='/background.png'
            alt='Landing Page'
          />
         
          <div className='absolute top-[280px] left-[50px] lg:left-[180px] z-20 font-bold flex flex-col items-start lg:items-start text-center lg:text-left'>
            <p className="text-[#ff4f73] text-5xl md:text-[100px] lg:text-[150px] sm:text-[80px] animate-slideInLeft shadow-custom">
              CHOOSE
            </p>

            <span className="text-white text-[20px] lg:text-[50px] md:text-[50px] sm:text-[40px] animate-fadeUp shadow-custom-heavy">
              YOUR EVENT
            </span>
            <p className='mt-[100px] text-white text-sm lg:text-xl md:text-sm sm:text-sm animate-fadeIn font-light space-x-3.5 space-y-4 max-w-xs lg:max-w-md'>
              Discover a curated selection of the most exciting and engaging events happening in your area. From exclusive shows to unmissable gatherings, we bring you a comprehensive list of events tailored to your interests.

              Don’t miss out on the chance to experience extraordinary moments. Explore our listings now and register for your favorite events. Take the first step towards unforgettable experiences—your next adventure awaits!
            </p>
          </div>
        </div>
      </div>

      {showTable && (
        <div>
          <div 
            onClick={handleUpButtonClick}
            className="absolute bottom-10 right-10 z-10 bg-[#580052] p-4 rounded-lg shadow-lg text-white cursor-pointer flex items-center justify-center animate-bounce"
          >
            <ArrowUpIcon className="w-6 h-6" />
          </div>

          <div
            className={`absolute inset-0 z-5 flex items-center justify-center p-4 lg:p-10 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          >
            <BeautifulTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
