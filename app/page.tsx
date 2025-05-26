import SectionOneWrapper from '@/components/SectionOne/SectionOneWrapper'
import React from 'react'
import SectionLayering from '@/components/ui/SectionLayering'
import SectionFourWrapper from '@/components/SectionFour/SectionFourWrapper'
import SectionfiveWrapper from '@/components/SectionFive/SectionfiveWrapper'
import SectionSixWrapper from '@/components/SectionSix/SectionSixWrapper'

const page = () => {
  
  return (
    <>
      {/* <SectionLayering pin={false}> */}
        <div className='section1 w-[100%] h-[100vh] bg-slate-400'>
          <SectionOneWrapper />
        </div>

        <div className='section1 w-[100%]'>
          <SectionFourWrapper />
        </div>

        <div className='section1 w-[100%]'>
          <SectionSixWrapper />
        </div>


        <div className='section1 w-[100%]'>
          <SectionfiveWrapper />
        </div>


      {/* </SectionLayering> */}
    </>
  )
}

export default page
