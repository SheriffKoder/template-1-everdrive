"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const CreativeTextAnim = ({trigger}: {trigger: React.RefObject<null>}) => {

    const text = useRef(null);



    // use gsap to return the text to its original position
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        // scroll trigger 
        // const scrollTrigger = ScrollTrigger.create({
        //     trigger: trigger.current,
        //     start: "top top",
        //     end: "bottom bottom",
        //     pin: true,
        //     pinSpacing: false,
        //     // markers: true,
        // })
    
    



        // gsap.set(".titleLetter", {
        //     skewY: 20,
        //     y: '200%',
        //     stagger: {
        //         amount: 0.25,
        //     },
        // })

        // with scroll trigger
        // left to right reveal
        gsap.from(".titleLetter", {
            delay: 0.75,
            opacity: 0,
            skewY: 20,
            duration: 0.75,
            stagger: {
              amount: 0.25,
            },
            scrollTrigger: {
                trigger: trigger.current,
                start: "top 40%",
                end: "bottom bottom",
                // markers: true,
            }
        })


        // Creative Studio animation - skewY and move from bottom to top
        // gsap.from(".titleLetter", {
        //     skewY: 20,
        //     y: '200%',
        //     duration: 0.75,
        //     stagger: {
        //       amount: 0.25,
        //     },
        // })


        gsap.from(".sectionFourText", {
            delay: 0.75,
            opacity: 0,
            duration: 0.5,
            y: "100%",
            stagger: {
              amount: 0.25,
            },
            scrollTrigger: {
                trigger: trigger.current,
                start: "top 50%",
                end: "bottom bottom",
                // markers: true,
            }
        })






    }, [])





  return (
    <div className="main-section max-w-[80vw]">
        <div className="w-full flex items-center justify-center">
            <h1 className="mx-auto localfont2 uppercase heading3 font-bold flex flex-row">
            {"Service with care".split("").map((letter, index) => (
                <div key={index} className={`titleLetter ${letter === " " ? 'w-[0.5rem] md:w-[1rem]' : ''}`}>
                    {letter}
                </div>
            ))}    
            </h1>
        </div>
        <p className="localfont1 paragraph2 text-center sectionFourText uppercase">client satisfaction isn’t just a goal—it’s the foundation of everything we do.</p>
        <p className="localfont1 paragraph2 text-center sectionFourText uppercase">We believe every rental should feel effortless, personal, and memorable.</p>

    </div>
  )
}

export default CreativeTextAnim