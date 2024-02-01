import React from 'react'
import background from '../assets/images/hero/background.png'
import girl from '../assets/images/hero/girl.avif'
const Hero = () => {
  return (
    <div  className='py-20 w-full h-full bg-[#031a27]'>
        <div  className='flex px-32 justify-between xl:flex-row lg:flex-col sm:flex-col lg:items-center'>
            <img src={girl} className='rounded-full w-96'/>
            <div className=' text-[#DFF6FF] flex flex-col xl:ml-56  justify-center gap-10  p-10'>
                <h1 className='text-6xl flex flex-col gap-2 '>
                    <span>Empowering Minds,</span><span> Transforming Futures.</span>
                </h1>
                <p className='text-xl'>
                Shape Your Learning Experience! Explore free courses in Web Development, App Development, Cybersecurity, Machine Learning, and more. Learn, grow, and innovate together. #EmpowerEducation
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero