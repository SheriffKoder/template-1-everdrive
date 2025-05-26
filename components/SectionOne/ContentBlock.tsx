import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Power4 } from 'gsap'

/**
 * ContentBlock component that handles its own animations based on currentContent state
 * 
 * @param {string} name - The name identifier for this content (e.g., "base", "other", "brand1")
 * @param {string} currentContent - The currently active content from parent
 * @param {number} animationDuration - Duration of animations in milliseconds
 * @param {Array<string>} textContent - Array of text lines to display
 * @param {string} textColor - CSS color for the text (default is inherited)
 * @param {number} initialDelay - Delay before initial animation starts in milliseconds (default is 0)
 */
const ContentBlock = ({ 
  name, 
  currentContent, 
  animationDuration = 1000,
  textContent,
  textColor = "inherit",
  initialDelay = 0
}: {
  name: string;
  currentContent: string;
  animationDuration: number;
  textContent: string[];
  textColor: string;
  initialDelay: number;
}) => {
  const containerRef = useRef(null);
  const textLines = useRef<(HTMLElement | null)[]>([]);
  const isInitialized = useRef(false);
  const prevContent = useRef(currentContent);
  const initialAnimationPlayed = useRef(false);
  
  // Helper to set text line refs
  const setTextLineRef = (el: HTMLElement | null, index: number) => {
    textLines.current[index] = el;
  };

  // Initialize on first render
  useEffect(() => {
    if (!containerRef.current) return;
    
    console.log(`${name} component mounted, currentContent:`, currentContent, `initialDelay:`, initialDelay);
    
    // Set initial state - always start hidden for animation
    gsap.set(containerRef.current, { opacity: 0, y: 30 });
    textLines.current.forEach(line => {
      if (line) gsap.set(line, { opacity: 0, y: 20 });
    });
    
    // If this content is active on first render, animate it in with the initial delay
    if (currentContent === name) {
      // Only apply initialDelay for the very first animation across all instances
      const shouldUseInitialDelay = !initialAnimationPlayed.current;
      const delayInSeconds = shouldUseInitialDelay ? initialDelay / 1000 : 0;
      
      console.log(`${name} is active on first render, animating in with delay:`, delayInSeconds, "seconds", 
                 "initialAnimationPlayed:", initialAnimationPlayed.current);
      
      // Animate container in
      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delayInSeconds,
        ease: Power4.easeOut,
        onStart: () => console.log(`${name} container animation starting after delay`)
      });

      // Staggered text animation
      textLines.current.forEach((line, index) => {
        if (line) {
          gsap.to(line, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: delayInSeconds + 0.2 + (index * 0.1),
            ease: Power4.easeOut,
            onStart: () => console.log(`${name} text line ${index} animation starting`)
          });
        }
      });
      
      // Mark that we've played the initial animation
      if (shouldUseInitialDelay) {
        initialAnimationPlayed.current = true;
      }
    }
    
    isInitialized.current = true;
  }, [initialDelay, currentContent, name]);

  // Handle content changes
  useEffect(() => {
    if (!containerRef.current) return;
    
    console.log(`${name} content change detected, currentContent:`, currentContent, 
                `prevContent:`, prevContent.current);
    
    // Skip if this is the first render
    if (!isInitialized.current) return;
    
    // CASE 1: This content is now active - play intro animation
    if (currentContent === name && prevContent.current !== name) {
      console.log(`${name} content: Playing intro animation`);
      
      // Add a small delay to allow the other content to animate out first
      const introDelay = animationDuration / 2; // Half the animation duration
      
      // Animate container in
      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: introDelay / 1000, // Convert to seconds for GSAP
        ease: Power4.easeOut
      });

      // Staggered text animation
      textLines.current.forEach((line, index) => {
        if (line) {
          gsap.to(line, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (introDelay / 1000) + 0.2 + (index * 0.1),
            ease: Power4.easeOut
          });
        }
      });
    }
    // CASE 2: This content is no longer active - play outro animation
    else if (currentContent !== name && prevContent.current === name) {
      console.log(`${name} content: Playing outro animation`);
      
      // Create a timeline for the outro animation
      const tl = gsap.timeline();
      
      // Animate text lines out in reverse order
      textLines.current.slice().reverse().forEach((line, index) => {
        if (line) {
          tl.to(line, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: Power4.easeIn
          }, index * 0.05);
        }
      });
      
      // Animate container out
      tl.to(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: Power4.easeIn
      }, "-=0.3");
    }
    
    // Update previous content ref
    prevContent.current = currentContent;
  }, [name, currentContent, animationDuration]);

  const headers = {
    base: "We are",
    brand1: "Mercedes Benz",
    brand2: "Porsche",
    brand3: "BMW"
  }


  return (
    <div 
      ref={containerRef} 
      className={`flex flex-col text-[40px] font-extralight leading-[90%] w-full localfont1 absolute top-0 left-0`}
      style={{ color: textColor }}
    >
      <h1 className='font-semibold ml-[-0px]'> {headers[name as keyof typeof headers]} </h1>
      {textContent.map((line, index) => (
        <p 
          key={index}
          ref={(el) => setTextLineRef(el, index)}
        >
          {line}
        </p>
      ))}
    </div>
  )
}

export default ContentBlock; 