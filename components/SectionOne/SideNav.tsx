import React, { useState } from 'react'

const SideNav = () => {
  // Navigation items dataset
  const navItems = ['Home', 'Journal', 'About', 'Contact'];
  
  // State to track which item is being hovered
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  return (
    <div className="z-[1] vertical-nav absolute right-0 h-full w-[5%]
    flex items-center justify-around w-content px-[20px] localfont2"
        style={{
          writingMode: 'vertical-rl',
        }} id="image-revealer-nav">
          
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className="nav-item relative cursor-pointer text-white bg-transparent transition-all group "
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className='w-[calc(100%+10px)] bg-[#03684B] rounded-[1px] h-[10px] group-hover:h-[calc(100%+20px)] -skew-y-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out'></div>
            {item.split('').map((letter, letterIndex) => (
              <span 
                key={letterIndex}
                className="inline-block transition-transform duration-300 ease-in-out px-[3px]"
                style={{
                //   transitionDelay: `${letterIndex * 50}ms`,
                  transform: hoveredItem === index ? 'rotate(-90deg)' : 'rotate(0deg)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
    </div>
  )
}

export default SideNav
