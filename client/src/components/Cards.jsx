import React from "react";
import web from "../assets/images/learning/web.png";
import android from "../assets/images/learning/android.jpg"
import dsa from '../assets/images//learning/dsa.png'
import { Link } from "react-router-dom";
const Cards = () => {
  const data = [
    {
      Title: "Unlock Your Web Development Journey",
      Discription:
        "Are you ready to dive into the exciting world of web development? Click on this card to unlock a treasure trove of free, high-quality web development courses that will empower you to build, design, and innovate on the web.",
      image: `${web}`,
      link: "/web"
    },
    {
      Title: "Craft Your App Development Mastery",
      Discription:
        "Ready to turn your app ideas into reality? Click on this card to access a curated collection of free app development courses that will empower you to create innovative and impactful mobile applications.",
      image: `${android}`,
      link: "/android"
    },
    {
      Title: "Explore the Boundless World of Machine Learning",
      Discription:
        "Step into the future of technology by clicking on this card. Uncover an array of free machine learning courses that will equip you with the skills to analyze data, create intelligent systems, and make a profound impact in the world of artificial intelligence.",
      image: `${web}`,
      link: "/machine-learning"
    },
    {
      Title: "Master the Art of Problem-Solving",
      Discription:
        "Embark on a journey of logical prowess by clicking on this card. Explore a comprehensive collection of free courses on Data Structures and Algorithms (DSA) that will sharpen your problem-solving skills and empower you to tackle coding challenges with confidence.",
      image: `${dsa}`,
      link: "/dsa"
    },
  ];

  // data.map((course) => console.log(course.image));
  // console.log(data.courses[category])

  return (
    <>
    <div className="head text-center">
        <h2 className='text-4xl w-full font-serif text-[#DFF6FF]'>Craft Your Coding Journey</h2>
        <p className='text-md text-white opacity-50 font-sans'>Different Categories</p>
      </div>
    <div className="flex flex-wrap justify-evenly py-5  drop-shadow-[0px_25px_35px_currentColor] ">
      
      {data.map((course, id) => (
        <div key={id}>
          <Link to={course.link}>
            <div className="cursor-pointer group perspective relative flex flex-col my-10 bg-clip-border rounded-xl w-96 h-96  border border-gray-100 bg-[#87c1e2] glowing">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <div className="p-6 text-center">
                    <img src={course.image} className="h-48 w-56 my-1 mx-auto" />
                    <h5 className="block mb-2 font-sans text-xl  font-semibold leading-snug tracking-normal text-[#031a27]">
                      {course.Title}
                    </h5>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden" >
                  <p className="block font-sans text-[#031a27] text-xl font-light p-10 text-justify">
                    {course.Discription}
                  </p>
                </div>
              </div>
              <span class="top sp"></span>
              <span class="right sp"></span>
              <span class="bottom sp"></span>
              <span class="left sp"></span>
            </div>

          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cards;
