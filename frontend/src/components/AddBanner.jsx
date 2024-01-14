import React from 'react'
import i1 from '../assets/Icon-1.png'
import i2 from '../assets/Icon-2.png'
import i from '../assets/Icon.png'
function AddBanner() {
    return (
        <div>
            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="head text-center">
                <h2 className='text-4xl w-full font-serif'>All Your Resourses In One Place</h2>
                <p className='text-md text-[#5f4e70] opacity-50 font-sans'>Welcome to BitByte</p>
            </div>
            <div className="smHeading flex justify-evenly my-4">
                <div className="p1 w-52">
                    <img src={i1} alt="" className=' mx-auto my-1'/>
                    <p className='text-[26px] w-full font-serif text-center'>Curated Excellence</p>
                    <p className='text-[14px] text-[#5f4e70] opacity-50 font-sans text-justify'>Discover the best free courses, firsthand experiences, and roadmaps meticulously curated to propel your development skills forward. Our team is dedicated to bringing you top-notch content from around the web.</p>
                </div>
                <div className="p1 w-52">
                    <img src={i2} alt="" className=' mx-auto my-1'/>
                    <p className='text-[26px] w-full font-serif text-center'> Real-Life Stories</p>
                    <p className='text-[14px] text-[#5f4e70] opacity-50 font-sans text-justify'>Learn from the experiences of individuals who overcame challenges in their learning journey. Dive into real-life stories that inspire and provide valuable insights.</p>
                </div>
                <div className="p1 w-52">
                    <img src={i} alt="" className=' mx-auto my-1'/>
                    <p className='text-[26px] w-full font-serif text-center'>Tailored Learning</p>
                    <p className='text-[14px] text-[#5f4e70] opacity-50 font-sans text-justify'>Your insights matter! Your feedback shapes our platform to cater precisely to your learning needs. We're not here to sell courses; we're here to empower you with the knowledge to choose the best resources for your adventure.</p>
                </div>
            </div>

            {/* one one AddBanner  */}

            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700" />
            
        </div>
    )
}

export default AddBanner