import React from 'react'
import background from '../assets/images/hero/background.png'
import girl from '../assets/images/hero/girl.avif'
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <div className='py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32 w-full h-full bg-[#031a27]'>
      <div className='flex flex-col-reverse sm:flex-col sm:items-center md:flex-row lg:flex-row xl:flex-row px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 place-content-around my-10'>
        <img src={girl} className='rounded-full w-full sm:w-96 mb-6 sm:mb-0 drop-shadow-[0_25px_35px_#87c1e2]' alt='Girl' />
        <div className='text-[#DFF6FF] flex flex-col justify-center gap-6 sm:gap-10 p-4 sm:p-10 md:p-10 lg:p-10 xl:p-10 sm:w-2/3 md:w-3/5 lg:w-3/5 xl:w-3/5'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4 text-justify font-bold'>
            <TypeAnimation
              sequence={['Empowering Minds', 2500, 'Transforming Futures', 2500]}
              // style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
            {/* <span>Empowering Minds,</span><br /><span> Transforming Futures.</span> */}
          </h1>
          <p className='text-base sm:text-xl'>
            Shape Your Learning Experience! Explore free courses in Web Development, App Development, Cybersecurity, Machine Learning, and more. Learn, grow, and innovate together. #EmpowerEducation
          </p>
        </div>
      </div>
    </div>


  )
}

export default Hero