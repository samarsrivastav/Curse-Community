import React from 'react'
import i1 from '../assets/images/icons/Icon-1.png'
import i2 from '../assets/images/icons/Icon-2.png'
import i from '../assets/images/icons/Icon.png'
function AddBanner() {
    return (
        <div className='bg-[#06344f] py-10'>
        <div className="head text-center">
          <h2 className='text-4xl w-full font-serif text-[#DFF6FF]'>All Your Resources In One Place</h2>
          <p className='text-md text-white opacity-50 font-sans'>Welcome to BitByte</p>
        </div>
      
        <div className="flex flex-col sm:flex-row sm:items-center md:flex-row justify-between my-4 mx-auto w-full sm:w-[80%] px-4 sm:px-10">
          <div className="p1 w-full sm:w-80">
            <img src={i1} alt="" className='mx-auto my-1' />
            <p className='text-[26px] w-full font-serif text-center text-[#DFF6FF]'>Curated Excellence</p>
            <p className='text-[14px] text-white opacity-50 font-sans text-justify'>Discover the best free courses, firsthand experiences, and roadmaps meticulously curated to propel your development skills forward. Our team is dedicated to bringing you top-notch content from around the web.</p>
          </div>
      
          <div className="p1 w-full sm:w-80 mt-4 sm:mt-0">
            <img src={i2} alt="" className='mx-auto my-1' />
            <p className='text-[26px] w-full font-serif text-center text-[#DFF6FF]'> Real-Life Stories</p>
            <p className='text-[14px] text-white opacity-50 font-sans text-justify'>Learn from the experiences of individuals who overcame challenges in their learning journey. Dive into real-life stories that inspire and provide valuable insights.</p>
          </div>
      
          <div className="p1 w-full sm:w-80 mt-4 sm:mt-0">
            <img src={i} alt="" className='mx-auto my-1' />
            <p className='text-[26px] w-full font-serif text-center text-[#DFF6FF]'>Tailored Learning</p>
            <p className='text-[14px] text-white opacity-50 font-sans text-justify'>Your insights matter! Your feedback shapes our platform to cater precisely to your learning needs. We're not here to sell courses; we're here to empower you with the knowledge to choose the best resources for your adventure.</p>
          </div>
        </div>
      
        {/* AddBanner  */}
        <hr className="w-32 sm:w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      
    )
}

export default AddBanner