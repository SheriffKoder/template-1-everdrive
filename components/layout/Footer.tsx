"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white py-12 px-6'>
      <div className=''>
        {/* Main Footer Content */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[15%] mb-8 max-w-[1500px] mx-auto'>
          
          {/* Logo Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Image
                src="/images/main-logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className='text-xl font-bold localfont2'>Everline</span>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Driving Excellence, One Mile at a Time.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold localfont2'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#home" className='text-gray-400 hover:text-white transition-colors duration-300'>Home</a></li>
              <li><a href="#about" className='text-gray-400 hover:text-white transition-colors duration-300'>About</a></li>
              <li><a href="#services" className='text-gray-400 hover:text-white transition-colors duration-300'>Services</a></li>
              <li><a href="#portfolio" className='text-gray-400 hover:text-white transition-colors duration-300'>Portfolio</a></li>
              <li><a href="#contact" className='text-gray-400 hover:text-white transition-colors duration-300'>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold localfont2'>Services</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Web Design</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Development</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Branding</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold localfont2'>Contact</h3>
            <div className='space-y-2 text-sm text-gray-400'>
              <p>123 Design Street</p>
              <p>Creative City, CC 12345</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@everline.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-sm text-gray-400'>
              © 2025 Everline. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>Privacy Policy</a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>Terms of Service</a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
