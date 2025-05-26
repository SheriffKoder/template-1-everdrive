"use client"
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmoothScrollButton from '../SectionOne/SmoothScrollButton'

gsap.registerPlugin(ScrollTrigger)

const SectionfiveWrapper = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef.current && videoRef.current) {
      // Set initial state
      gsap.set(wrapperRef.current, {
        y: 100,
        opacity: 0
      })

      // Create scroll trigger animation
      gsap.to(wrapperRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            if (videoRef.current) {
              videoRef.current.playbackRate = 0.75 // Start at 0.75x speed
              videoRef.current.play()
              
              // Transition to normal speed after 1 second
              setTimeout(() => {
                if (videoRef.current) {
                    gsap.to(videoRef.current, {
                        playbackRate: 1.0,
                        duration: 2.0,
                        ease: "power2.out"
                    })
                }
              }, 1000)
            }
          }
        }
      })


      gsap.set(".sectionFiveTitle", {
        y:50,
        opacity:0,
      })

      gsap.to(".sectionFiveTitle", {
        y:0,
        opacity:1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
        }
      })

    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='w-[100%] h-[100vh] flex flex-col items-start justify-start bg-black
    px-[5rem] relative'>

        {/* <div className='w-[100%] h-[70%] bg-white/5 absolute top-1/2 left-0 -translate-y-1/2 z-[0]'>

        </div> */}


        {/* <div className='absolute left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%]'>
            <video src="/images/clients/istockphoto-1219045139-640_adpp_is.mp4" 
            className='absolute inset-0 object-cover z-0 brightness-80' 
            loop={false} 
            muted 
            playsInline 
            ref={videoRef}
            style={{ 
                // transform: '', 
                width: '100%', 
                height: '100%' 
            }} 
            />
        
        <div className='absolute h-[calc(100%+10px)] w-[calc(100%+10px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            style={{
                background: `radial-gradient(circle at 72% 50%, rgba(150, 0, 200, 0) 20%, rgba(0, 0, 0, 1) 100%)`
            }}
        ></div>

        </div> */}




        {/* Background video - not skewed */}
        <div className="w-[90%] h-[70%] absolute right-[5rem] top-1/2 -translate-y-1/2 z-[0]" ref={wrapperRef}>

            {/* <div className={`-skew-x-11 z-[10] top-[-6px] left-[-3px] w-[95%] h-[95%] transition-all duration-300 ease-in-out
            bg-[#ffffff]/10
            overflow-hidden absolute`}></div> */}

            <div className={`z-[10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full -skew-x-11 transition-all duration-300 ease-in-out
            bg-[#111111]/80 group-hover:bg-[#0D0D0D]/80
            overflow-hidden relative`}>

            <video 
            src="/images/clients/istockphoto-1219045139-640_adpp_is.mp4" 
            className='absolute inset-0 object-cover z-0 brightness-80' 
            ref={videoRef}
            loop={false}
            muted 
            playsInline
            style={{
                transform: 'scale(1.2) skewX(12deg)',
                width: '100%',
                height: '100%'
            }}
            />





            </div>
        </div>

        <div className='absolute h-[calc(100%+10px)] w-[calc(100%+10px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        style={{
            background: `radial-gradient(circle at 60% 50%, rgba(150, 0, 200, 0) 20%, rgba(0, 0, 0, 1) 70%)`
        }}
        ></div>
        

        <h1 className='text-white w-[300px] localfont2 text-[40px] font-bold
        absolute top-1/2 left-[10rem] -translate-y-1/2
        pr-0 hover:pr-4 transition-all duration-300 ease-in-out
        flex flex-col gap-0 items-start justify-start'>
            
            {"What is, your next, ride?".split(",").map((text, index) => (
                <span key={index} className='text-white sectionFiveTitle'>{text}</span>
            ))}

            {/* <button className="relative text-sm mt-5 ml-10">
                schedule a test drive

            <div className={`-skew-x-11 z-[10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[calc(100%+20px)] h-[calc(100%+20px)] transition-all duration-300 ease-in-out
            bg-[#ffffff]/10
            overflow-hidden absolute`}></div>
            </button>
            */}
            <div className='group sectionFiveTitle'>
            <SmoothScrollButton text="schedule a test drive" sectionId="section-one" backgroundColor="#03684B" textColor="#ffffff" className="relative text-sm mt-5 ml-10" />
            </div>

        </h1>



    </div>
  )
}

export default SectionfiveWrapper