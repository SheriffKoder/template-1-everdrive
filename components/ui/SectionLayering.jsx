"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/all";

export const SectionLayering = ({children, pin = true}) => {
    gsap.registerPlugin(ScrollTrigger);
    // Use refs to track scroll position and direction
    const lastScrollY = useRef(0);
    const scrollDirection = useRef(null);

    useGSAP(() => {
        // Set up scroll direction detection
        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                scrollDirection.current = "down";
            } else if (currentScrollY < lastScrollY.current) {
                scrollDirection.current = "up";
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);
        
        // Create scroll triggers for each section
        const sections = gsap.utils.toArray(".section1");
        
        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                pin: pin,      // disable to remove the sticky effect
                pinSpacing: false,
                // markers: true, // Uncomment for debugging
                snap: {
                    snapTo: (progress, self) => {
                        // Log for debugging
                        console.log(`Progress: ${progress.toFixed(2)}, Direction: ${scrollDirection.current || "unknown"}`);
                        
                        // Use our more reliable direction detection
                        if (scrollDirection.current === "down") {
                            // When scrolling down, snap to next section after 22% progress
                            return progress > 0.22 ? 1 : 0;
                        } else if (scrollDirection.current === "up") {
                            // When scrolling up, snap to previous section after 78% progress
                            return progress < 0.78 ? 0 : 1;
                        } else {
                            // Fallback to nearest
                            return Math.round(progress);
                        }
                    },
                    duration: 1, // Faster for more immediate feedback
                    ease: "power1.out", // Simpler easing for more predictable behavior
                    delay: 0 // No delay for immediate response
                },
                // Very small scrub for responsive feel
                scrub: 0.01,
                onUpdate: self => {
                    // Additional logging to see when snap is triggered
                    if ((scrollDirection.current === "down" && self.progress > 0.2 && self.progress < 0.3) ||
                        (scrollDirection.current === "up" && self.progress > 0.7 && self.progress < 0.8)) {
                        console.log(`Near threshold: ${self.progress.toFixed(2)}, Direction: ${scrollDirection.current}`);
                    }
                }
            });
        });
        
        // Cleanup function
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div className="container1">
            {children}
        </div>
    );
}

export default SectionLayering
