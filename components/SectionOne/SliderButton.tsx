import React, { useEffect, useState } from 'react'

const SliderButton = ({text}: {text: string}) => {
  const [isTopHalf, setIsTopHalf] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Get all elements with the image-container class
      const cards = document.querySelectorAll('.image-container');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
          const rect = card.getBoundingClientRect();
          const cardHeight = rect.height;
          const mouseY = (e as MouseEvent).clientY - rect.top; // Mouse position relative to the card
          
          // If mouse is in the top half of the card
          if (mouseY < cardHeight / 2) {
            setIsTopHalf(true);
          } else {
            setIsTopHalf(false);
          }
        });
      });
    };
    
    // Initial check
    handleScroll();
    
    return () => {
      // Clean up event listeners
      const cards = document.querySelectorAll('.image-container');
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
      });
    };
  }, []);
  
  return (
    <div className={`group absolute ${isTopHalf ? 'top-4' : 'bottom-4'} right-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-700 w-[180px]`}>
      <div className={`absolute w-full ${isTopHalf ? 'top-0' : 'bottom-0'} right-0 bg-white text-black px-4 py-2 font-medium gap-2 flex items-center justify-center`}>
        <span className='skew-y-8 group-hover:skew-y-0 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100'>{text}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

export default SliderButton;
