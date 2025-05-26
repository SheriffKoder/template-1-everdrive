"use client"

import { useState, useRef } from "react";
import TestimonialsCard from "./TestimonialsCard";

const Slider = ({ cards, variation, mode, handleShowModal }: { cards: any, variation: number, mode?: string, handleShowModal?: (identifier:string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const dragThreshold = 50; // Minimum distance to trigger navigation
  
  const totalCards = cards.length;
  const visibleCards = 3; // Number of visible cards in the slider at once
  const scrollStep = 0.5; // Scroll by half a card instead of full card

  const canSlideLeft = currentIndex > 0;
  const canSlideRight = currentIndex < totalCards - (visibleCards - scrollStep);

  const handleNext = () => {
    if (canSlideRight) {
      setCurrentIndex((prev) => prev + scrollStep);
    }
  };

  const handlePrev = () => {
    if (canSlideLeft) {
      setCurrentIndex((prev) => prev - scrollStep);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentX = e.clientX;
    const deltaX = startX - currentX;
    
    // Check if we've moved enough to trigger navigation
    if (Math.abs(deltaX) > dragThreshold) {
      if (deltaX > 0) {
        // Dragged left - go next
        handleNext();
      } else {
        // Dragged right - go prev
        handlePrev();
      }
      
      // Reset for next drag action
      setIsDragging(false);
      setStartX(0);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    // Just reset state, no navigation logic
    setIsDragging(false);
    setStartX(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setStartX(0);
  };

  // Calculate progress percentage
  const progressPercentage = ((currentIndex + scrollStep) / (totalCards - visibleCards + scrollStep)) * 100;

  return (
    <div className="relative ">

      <div 
        className="slider-container relative overflow-hidden w-[90%] mx-auto pl-[5%] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ userSelect: 'none' }}
      >
        
        {/* Left half click zone */}
        <div 
          className="absolute left-0 top-0 w-1/2 h-full z-20 cursor-pointer"
          onClick={handlePrev}
        />
        
        {/* Right half click zone */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full z-20 cursor-pointer"
          onClick={handleNext}
        />

        <div className="absolute right-0 top-0 w-[2%] h-full z-10 bg-gradient-to-l from-0% from-black to-transparent"></div>
        <div className="absolute left-0 top-0 w-[4%] h-full z-10 bg-gradient-to-r from-0% from-black to-transparent"></div>

        {/* Slider Cards */}
        <div
          className="cards-wrapper transition-transform duration-300 ease-in-out flex flex-row gap-[1rem] select-none"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card: any, index: number) => (
            <div key={index} className="flex-shrink-0 w-[calc(100%/3.2)]">
              <TestimonialsCard card={card} index={index} variation={variation}
              mode={mode}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex pl-[12.5%] pr-[12%] flex-row items-center justify-between gap-[1rem] h-[50px] w-[80%] mx-auto">
        {/* Progress Bar (Bottom-Left) */}
        <div className="w-1/4 bg-[#1D1D1D] rounded-full overflow-hidden h-2">
          <div
            className="bg-[#03684B] h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Navigation Buttons (Bottom-Right) */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={!canSlideLeft}
            className={`h-[30px] w-[30px] bg-foreground rounded-[7px] hover:bg-primary text-primary hover:text-foreground transition-all duration-300 ${
              !canSlideLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            disabled={!canSlideRight}
            className={`h-[30px] w-[30px] bg-[#03684B] rounded-[7px] hover:bg-primary text-white hover:text-foreground transition-all duration-300 ${
              !canSlideRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
