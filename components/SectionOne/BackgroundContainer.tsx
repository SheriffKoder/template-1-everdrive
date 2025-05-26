import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

/**
 * BackgroundContainer component that handles background image transitions
 * with fade effects and a radial gradient mask
 * 
 * @param {string} currentContent - The currently active content
 */
const BackgroundContainer = ({ currentContent }: { currentContent: string }) => {
  // Refs for tracking image elements
  const imageRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const prevContentRef = useRef(currentContent);
  const isAnimatingRef = useRef(false);
  
  // Background image data
  const backgroundData = {
    base: {
      name: "base",
      imageSrc: "/images/hero-option-1.jpg",
      backgroundColor: "black" // Dark gray overlay
    },
    brand1: {
      name: "brand1",
      imageSrc: "/images/hero-option-1.jpg",
      backgroundColor: "black" // Dark gray overlay
    },
    brand2: {
      name: "brand2",
      imageSrc: "/images/hero-option-2.jpg",
      backgroundColor: "black" // Dark gray overlay
    },
    brand3: {
      name: "brand3",
      imageSrc: "/images/hero-option-3.jpg",
      backgroundColor: "black" // Dark gray overlay
    }
  };
  
  // Set up initial visibility on mount
  useEffect(() => {
    // Set all images to invisible except the current one
    Object.keys(backgroundData).forEach(key => {
      if (imageRefs.current[key]) {
        gsap.set(imageRefs.current[key], {
          opacity: key === currentContent ? 1 : 0,
          visibility: key === currentContent ? "visible" : "hidden"
        });
      }
    });
  }, []);
  
  // Handle background transitions when currentContent changes
  useEffect(() => {
    // Skip if this is the first render or same content
    // if (prevContentRef.current === currentContent) return;
    
    // Skip if already animating to prevent overlapping animations
    if (isAnimatingRef.current) {
      console.log("Animation already in progress, skipping");
      return;
    }
    
    console.log(`Background transitioning from ${prevContentRef.current} to ${currentContent}`);
    
    // Set animating flag
    isAnimatingRef.current = true;
    
    // Create a timeline for coordinated animations
    const tl = gsap.timeline({
      onComplete: () => {
        // Reset animating flag when done
        isAnimatingRef.current = false;
        
        // Ensure all other images are fully hidden
        Object.keys(backgroundData).forEach(key => {
          if (key !== currentContent && imageRefs.current[key]) {
            gsap.set(imageRefs.current[key], {
              opacity: 0,
              visibility: "hidden"
            });
          }
        });
      }
    });
    
    // Make sure the next image is ready but invisible
    if (imageRefs.current[currentContent]) {
      gsap.set(imageRefs.current[currentContent], {
        visibility: "visible",
        opacity: 0
      });
    }
    
    // Fade out previous image
    if (imageRefs.current[prevContentRef.current]) {
      tl.to(imageRefs.current[prevContentRef.current], {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
    
    // Fade in current image
    if (imageRefs.current[currentContent]) {
      tl.to(imageRefs.current[currentContent], {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.4"); // Start slightly before previous animation finishes
    }
    
    // Update previous content ref
    prevContentRef.current = currentContent;
    
  }, [currentContent]);
  
  // Set ref for an image container
  const setImageRef = (el: HTMLElement | null, name: string) => {
    imageRefs.current[name] = el;
  };
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Radial gradient mask overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Stack of background images */}
      {Object.values(backgroundData).map((content) => (
        <div 
          key={content.name}
          ref={(el) => setImageRef(el, content.name)}
          className="absolute inset-0 w-full h-full"
          style={{ 
            opacity: content.name === currentContent ? 1 : 0,
            visibility: content.name === currentContent ? "visible" : "hidden"
          }}
        >
          {/* Background image */}
          <div className="absolute h-[50%] w-[90%] bottom-1/2 translate-y-1/2">
            <Image 
              src={content.imageSrc}
              alt={content.name}
              layout="fill"
              objectFit="contain"
              priority={content.name === currentContent}
            />
          </div>
          
          {/* Color overlay */}
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundColor: content.backgroundColor,
              opacity: 0.6,
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundContainer; 