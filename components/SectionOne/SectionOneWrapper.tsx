"use client"
import React, { useEffect, useState } from 'react';
import ContentBlock from './ContentBlock';
import BrandsSlider from "./BrandsSlider";
import Loader from "./Loader";
import BackgroundContainer from './BackgroundContainer';
import SideNav from './SideNav';
import Image from 'next/image';
import SmoothScrollButton from './SmoothScrollButton';
import FramerHeroAnimation from './FramerHeroAnimation';

// Content data for different sections
const contentData = {
  base: {
    name: "base",
    textContent: [
      // "Premium German vehicles.",
      "Driven by quality.",
      "Service with care.",
      "Powered by precision.",
      "Crafted for comfort."
    ],
    textColor: "inherit",
    backgroundColor: "rgba(255, 0, 0, 0.5)"
  },
  brand1: {
    name: "brand1",
    textContent: [
      "Graceful in motion.",
      "Engineered for comfort.",
      "Luxury without compromise.",
      "Design meets prestige."
    ],
    textColor: "inherit", // red-500
    backgroundColor: "rgba(0, 255, 0, 0.5)"
  },
  brand2: {
    name: "brand2",
    textContent: [
      "Built for thrill.",
      "Iconic by design.",
      "Legacy of speed.",
      "Unmatched German precision."
    ],
    textColor: "inherit", // red-500
    backgroundColor: "rgba(0, 100, 200, 0.5)"
  },
  brand3: {
    name: "brand3",
    textContent: [
      "Drive with purpose.",
      "Agile. Bold. Refined.",
      "Born to perform.",
      "Luxury in motion."
    ],
    textColor: "inherit", // blue-500
    backgroundColor: "rgba(0, 0, 255, 0.5)"
  },
};

export default function SectionOneWrapper() {
  // Single state to track which content is currently active
  const [currentContent, setCurrentContent] = useState("");

  // Animation duration constant
  const ANIMATION_DURATION = 1000; // 1 second

  // Simple function to change content
  const changeContent = (newContent: string) => {
    // Only proceed if we're changing to a different content
    if (currentContent !== newContent) {
      console.log(`Changing content from ${currentContent} to ${newContent}`);
      // Update the current content - this will trigger animations in child components
      setCurrentContent(newContent);
    }
  };

  // cause the base content to show after 4 seconds and animate after the loader

  useEffect(() => {
    setTimeout(() => {
      setCurrentContent("base");
    }, 5200);
    }, []);

  return (
    <div className="relative w-full h-screen bg-black flex flex-row overflow-hidden" id="image-revealer-section">
      
      {/* Background container with transitions */}
      <BackgroundContainer 
        currentContent={currentContent} 
      />

      <Loader />


      <div id="home" className="main-content flex flex-col w-full p-[1rem] relative z-[2] md:z-[0]">
        
        <h1 className="z-[10] heading1 localfont3 flex flex-col relative w-fit" id="image-revealer-heading" style={{textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}>
          <span className="leading-[90%]" >Everline</span>
          <span className="heading2 leading-[90%] uppercase pl-2 flex flex-row items-center gap-[10px]">
            Drive
            <div className='mt-2 md:mt-4'>
            <Image
              src="/images/main-logo.png"
              alt="Everline Drive"
              width={50}
              height={50}
              className='w-full h-full object-cover'
            />
          </div>
            
            
            </span>


        </h1>

        <div className="w-[60%] mt-auto text-[20px] flex flex-row mb-[1rem] ml-[1rem]" id="image-revealer-text">
          {/* Content container - all content blocks are always rendered */}
          <div className="content-container relative h-[220px] w-full px-[20px]">
            {/* Render all content blocks using the contentData */}
            {Object.values(contentData).map((content, index) => (
              <FramerHeroAnimation 
                key={content.name}
                checker={currentContent}
                identifier={content.name}
                paragraph={content.textContent.join(', ')}
              />
            ))}
          </div>

          {/* <ul className="flex flex-row ml-auto items-end gap-[50px]" id="image-revealer-links">
            <li className="localfont2 text-[15px] underline underline-offset-[5px] uppercase relative group">
              <div className='z-[-1] h-[calc(100%+10px)] bg-[#03684B] rounded-[1px] w-[10px] group-hover:w-[calc(100%+30px)] -skew-y-12 absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out rotate-[12deg]'></div>
                <span className='relative'>
                  <div className='absolute top-[55%] -translate-y-1/2 left-[-0.8rem] w-2 h-2 bg-white rounded-full'></div>
                  Journal</span>
            </li>
            <li className="localfont2 text-[15px] underline underline-offset-[5px] uppercase relative group">
              <div className='z-[-1] h-[calc(100%+10px)] bg-[#03684B] rounded-[1px] w-[10px] group-hover:w-[calc(100%+30px)] -skew-y-12 absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out rotate-[12deg]'></div>
                <span className='relative'>
                  <div className='absolute top-[55%] -translate-y-1/2 left-[-0.8rem] w-2 h-2 bg-white rounded-full'></div>
                  About
                </span>
            </li>
            <li className="localfont2 text-[15px] underline underline-offset-[5px] uppercase relative group">
              <div className='z-[-1] h-[calc(100%+10px)] bg-[#03684B] rounded-[1px] w-[10px] group-hover:w-[calc(100%+30px)] -skew-y-12 absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out rotate-[12deg]'></div>
                <span className='relative'>
                  <div className='absolute top-[55%] -translate-y-1/2 left-[-0.8rem] w-2 h-2 bg-white rounded-full'></div>
                  Contact
                </span>
            </li>
          </ul> */}
        </div>
      </div>

      <SideNav />

      <div className='absolute-marquee z-[1] absolute right-[10%] md:right-[5%] top-1/2 -translate-y-1/2 brandSlider h-screen
      text-center md2:text-left max-w-[100vh] 8xl:bg-gradient-to-r from-[#9046d92a] to-[#17d8ff36]
      hover:from-[#e6e6e600] hover:to-[#aff2ff00] transition-all duration-300'>
        <div className="absolute left-0 top-0 w-full h-[4%] z-10 bg-gradient-to-b from-0% from-black to-transparent"></div>
        <div className="absolute right-0 bottom-0 w-full h-[4%] z-10 bg-gradient-to-t from-0% from-black to-transparent"></div>
        <BrandsSlider setCurrentContent={changeContent} />
      </div>

      <SmoothScrollButton sectionId="fleet" text="Check our fleet" backgroundColor="#03684B" textColor="white"
      className='localfont2 text-[15px] lg:text-[20px] underline underline-offset-[5px] uppercase absolute bottom-[2rem] right-1/2 translate-x-1/2 z-[10]'/>

    </div>
  );
}