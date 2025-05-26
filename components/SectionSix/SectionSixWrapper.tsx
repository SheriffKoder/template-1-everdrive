"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { carCategories } from '@/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function SectionSixWrapper() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [currentCategory, setCurrentCategory] = useState<typeof carCategories[number] | null>(null)

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    
    if (cards.length > 0) {
        // Set initial state
        gsap.set(cards, {
            opacity: 0,
            y: 50
        })


        gsap.to(cardsRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "20% 80%",
            }
        })

        gsap.to(".section-six-title", {
            gap: "40px",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "20% 80%",
            }
        })

   
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className='w-[100%] h-[120vh] bg-black flex items-center justify-center flex-col
    '>
        
        <div className="section-six-title h-[200px] w-fit flex flex-row items-center justify-center relative
        gap-0">

            <p className='text-[50px] mt-[22px] localfont2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[20] text-white'
            style={{
                mixBlendMode: 'difference'
            }}>
                Categories
            </p>

            <div className="h-[100px] w-[65px]">
                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>

                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 -skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>
            </div>

            <div className="h-[100px] w-[65px]">
                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>

                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 -skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>
            </div>

            <div className="h-[100px] w-[65px]">
                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>

                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 -skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>
            </div>

            <div className="h-[100px] w-[65px]">
                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>

                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 -skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>
            </div>

            <div className="h-[100px] w-[65px]">
                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>

                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 -skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>
            </div>

            <div className="h-[100px] w-[65px]">
                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>

                <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 -skew-x-30 transition-all duration-300 ease-in-out
                bg-[#ffffff] group-hover:bg-[#0D0D0D]/80
                overflow-hidden relative`}></div>
            </div>

        </div>

        {/* cards */}
        <div className="flex items-center justify-center gap-0 mt-[75px]">
            {carCategories.map((carCategory, index) => (
                <div 
                    key={index} 
                    ref={el => {
                        if (el) {
                            cardsRef.current[index] = el;
                        }
                    }}
                    className="h-[400px] w-[200px] relative group cursor-pointer
                    "
                    onMouseOver={() => setCurrentCategory(carCategory)}
                    onMouseLeave={() => setCurrentCategory(null)}
                    >


                    <div className="relative h-full w-full overflow-hidden group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    
                    
                    <div className='w-[30px] rounded-[2px] h-[30px] bg-black/50 hover:bg-white group/icon
                    absolute top-2 right-2 z-[10] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
                        <ArrowRightIcon className='w-[15px] h-[15px] text-white rotate-[-45deg] group-hover/icon:text-black transition-colors duration-0' />
                    </div>

                    <Image
                        src={carCategory.src || '/placeholder-image.jpg'}
                        alt={carCategory.name}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
                    <div className={`absolute inset-0 border-l border-t border-b border-black ${
                        index === carCategories.length - 1 ? 'border-r' : ''
                    }`} />
                    <span className="absolute bottom-[10px] left-[45px] origin-bottom-left 
                    -rotate-90 text-white group-hover:text-white text-[30px] w-fit localfont2 z-10 transition-colors duration-300">
                        {carCategory.name}

                        <div className="absolute group-hover:w-full w-0 h-[1px] bg-white/30 transition-all duration-300 ease-in-out">

                        </div>
                    </span>
                    </div>
                </div>
            ))}
        </div>

        <div className='mt-[30px] localfont1 text-white text-[20px]'>
        {currentCategory && currentCategory.desc && (
            <p key={currentCategory.name} className='sectionSixDesc fadeupAnimation'> {currentCategory.desc} </p>
        )}
        </div>
    </div>
  )
}