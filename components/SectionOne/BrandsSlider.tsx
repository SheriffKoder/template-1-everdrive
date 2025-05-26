"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

// import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { brandLogos } from '@/constants';
import { Power4 } from "gsap";
import SliderButton from './SliderButton';

const BrandsSlider = ({setCurrentContent}: {setCurrentContent: (content: string) => void}) => {
  const firstText = useRef<HTMLElement | null>(null);
  const secondText = useRef<HTMLElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);
  const imageElements = useRef<(HTMLElement | null)[]>([]);
  const imageBlocks = useRef<(HTMLElement | null)[]>([]);
  const isBusy = useRef(false);
  
  const cardHeight = 700;
  const cardWidth = 460;
  const cardMargin = 40;
  
  const speedFactor = 0.02
  const factor = useRef(speedFactor);

  let yPercent = 10;
  let direction = -1; // -1 up, 1 down

  // Reset refs array when items change
  const setImageElementRef = (el: HTMLElement | null, index: number) => {
    imageElements.current[index] = el;
  };
  
  const setImageBlockRef = (el: HTMLElement | null, index: number) => {
    imageBlocks.current[index] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Power4);

    requestAnimationFrame(animation);

    gsap.to(slider.current, {   //2
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            scrub: 0.25,    // instead of 1 to be more smooth
            onUpdate: e => direction = e.direction * -1, // reverse direction
        },
        y: "-=75px", // Changed from x to y
    })

    const tl = gsap.timeline();
    
    // Animate all image elements using refs instead of class selectors
    imageElements.current.forEach(element => {
      if (element) {
        gsap.to(element, {
          opacity: 1,
          duration: 1,
          delay: 3,
          ease: Power4.easeInOut,
        });
      }
    });
    
    // Animate all image blocks with reverse stagger
    const totalBlocks = imageBlocks.current.length;
    imageBlocks.current.forEach((block, index) => {
      if (block) {
        // Calculate reverse stagger delay - higher index gets smaller delay
        const reverseIndex = totalBlocks - 1 - index;
        const reverseStaggerDelay = 2.5 + (reverseIndex * 0.25);
        
        gsap.to(block, {
          y: "-100%",
          ease: Power4.easeInOut,
          duration: 4,
          delay: reverseStaggerDelay,
        });
      }
    });
    
  }, []);

  const animation = () => {

      // reset (up)
      if (yPercent <= -100) {
          yPercent = 0;
      }

      // reset (down)
      if (yPercent > 0) {
          yPercent = -100;
      }

      gsap.set(firstText.current, {
          yPercent: yPercent
      });
      gsap.set(secondText.current, {
          yPercent: yPercent
      });
      yPercent += factor.current * direction; // Changed from xPercent to yPercent
      requestAnimationFrame(animation);
  }

  const handleMouseEnter = (logoName: string) => {
    if (isBusy.current) return;
    
    isBusy.current = true;
    setCurrentContent(logoName);
    
    // Reset busy state after 1.5 seconds
    setTimeout(() => {
      isBusy.current = false;
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (isBusy.current) {
      // Wait until not busy, then execute mouse leave
      const checkBusy = () => {
        if (!isBusy.current) {
          factor.current = speedFactor;
          setCurrentContent("base");
        } else {
          // Check again in 500ms
          setTimeout(checkBusy, 500);
        }
      };
      checkBusy();
    } else {
      // Execute immediately if not busy
      factor.current = speedFactor;
      setCurrentContent("base");
    }
  };

  return (
    <div className="relative  w-full h-full">
      <div className="absolute left-0 top-0 w-full h-[100px] z-10 bg-gradient-to-b from-transparent to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-full h-[100px] z-10 bg-gradient-to-t from-transparent to-transparent"></div>
      
      <div ref={slider} className="relative whitespace-nowrap flex flex-col
      hover:cursor-pointer z-[1]"
              onMouseEnter={() => factor.current = 0}
              onMouseLeave={handleMouseLeave}
          >
              <span ref={firstText} className="relative top-0">
                  <div className={`w-[${cardWidth}px]
                  flex flex-col justify-around items-center`}
                  style={{height: `calc(${cardHeight+cardMargin}px*${brandLogos.length})`}}
                  >
                    {brandLogos.map((logo, index) => (
                      <div className={`w-full flex relative`} key={`first-${index}`}
                      style={{
                        marginTop: `calc(${cardMargin}px)`,
                        height: `calc(${cardHeight}px)`,
                        width: `calc(${cardWidth}px)`
                      }}
                      >
                        <div className='image-container bg-transparent w-full h-full flex justify-center 
                        transform rounded-[7px] -skew-y-8 brightness-200 hover:brightness-100 overflow-hidden
                        grayscale-50 hover:grayscale-0 hover:opacity-100 transition-all
                        duration-500 items-end group hover:border-white/10 border-2 border-transparent'>
                        <img
                            ref={(el) => setImageElementRef(el, index)}
                            src={logo.src}
                            alt={logo.name}
                            className="object-cover object-center w-full opacity-0"
                            onMouseEnter={() => handleMouseEnter(logo.name)}
                            style={{height: `calc(${cardHeight}px)`}}
                        />
                        <SliderButton text={logo.dsc} />
                        <div 
                            ref={(el) => setImageBlockRef(el, index)}
                            className="absolute bottom-0 left-0 w-full h-[110%] bg-black"
                        ></div>
                        </div>
                        </div>
                    ))}
                  </div>



              </span>


              <span ref={secondText} className={`absolute`}
              style={{
                top: `calc(${cardHeight+cardMargin}px*${brandLogos.length})`,
                height: `calc(${cardHeight+cardMargin}px*${brandLogos.length})`,
                width: `calc(${cardWidth}px)`
              }}>
                  <div className={`w-[${cardWidth}px]
                  flex flex-col justify-around items-center`}>
                    {brandLogos.map((logo, index) => (
                      <div className={`w-full flex relative`} key={`second-${index}`}
                      style={{
                        marginTop: `calc(${cardMargin}px)`,
                        height: `calc(${cardHeight}px)`
                      }}
                      >
                        <div className='image-container bg-transparent h-full  w-full flex justify-center 
                        p-2 rounded-[7px] transform -skew-y-8 overflow-hidden relative brightness-200 hover:brightness-100
                        grayscale-50 opacity-100 hover:grayscale-0 hover:opacity-100 transition-all group
                        duration-500 items-end group hover:border-white/10 border-2 border-transparent'>
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            className="object-cover object-center w-full"
                            onMouseEnter={() => handleMouseEnter(logo.name)}
                        />
                        <SliderButton text={logo.dsc} />
                        </div>
                      </div>
                      ))}
              </div>
              </span>


              
          </div>
    </div>
  );
};

export default BrandsSlider; 