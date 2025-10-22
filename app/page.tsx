import SectionOneWrapper from '@/components/SectionOne/SectionOneWrapper'
import React from 'react'
import SectionLayering from '@/components/ui/SectionLayering'
import SectionFourWrapper from '@/components/SectionFour/SectionFourWrapper'
import SectionfiveWrapper from '@/components/SectionFive/SectionfiveWrapper'
import SectionSixWrapper from '@/components/SectionSix/SectionSixWrapper'
import Footer from '@/components/layout/Footer'
import SectionfiveWrapperDesktop from '@/components/SectionFive/SectionfiveWrapperDesktop'

const page = () => {
  
  return (
    <main className='text-white bg-black'>
      {/* <SectionLayering pin={false}> */}
        <section className='section1 w-[100%] h-[100vh]'>
          <SectionOneWrapper />
        </section>

        <section className='section1 w-[100%]'>
          <SectionFourWrapper />
        </section>

        <section className='section1 w-[100%] px-[5%]'>
          <SectionSixWrapper />
        </section>


        <section className='section1 w-[100%] lg:hidden block'>
          <SectionfiveWrapper />
        </section>

        <section className='section1 w-[100%] hidden lg:block'>
          <SectionfiveWrapperDesktop />
        </section>

        {/* Footer Section */}
        <Footer />

      {/* </SectionLayering> */}
    </main>
  )
}

export default page
