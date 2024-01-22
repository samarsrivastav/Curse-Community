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
      link:"/web"
    },
    {
      Title: "Craft Your App Development Mastery",
      Discription:
        "Ready to turn your app ideas into reality? Click on this card to access a curated collection of free app development courses that will empower you to create innovative and impactful mobile applications.",
      image: `${android}`,
      link:"/android"
    },
    {
      Title: "Explore the Boundless World of Machine Learning",
      Discription:
        "Step into the future of technology by clicking on this card. Uncover an array of free machine learning courses that will equip you with the skills to analyze data, create intelligent systems, and make a profound impact in the world of artificial intelligence.",
      image: `${web}`,
      link:"/machine-learning"
    },
    {
      Title: "Master the Art of Problem-Solving",
      Discription:
        "Embark on a journey of logical prowess by clicking on this card. Explore a comprehensive collection of free courses on Data Structures and Algorithms (DSA) that will sharpen your problem-solving skills and empower you to tackle coding challenges with confidence.",
      image: `${dsa}`,
      link:"/dsa"
    },
  ];

  // data.map((course) => console.log(course.image));
  // console.log(data.courses[category])

  return (
    <div className="flex flex-wrap justify-evenly">
      {data.map((course, id) => (
        <div key={id}>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-[550px]">
            <div className="p-6">
              <img src={course.image} className="h-48 w-56"/>
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {course.Title}
              </h5>
            </div>
            <p className="block font-sans text-base antialiased font-light p-4">
              {course.Discription}
            </p>
            <div className="h-full flex justify-center items-end pb-5">
              <Link to={course.link} className="inline-block">
                <button
                  className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
