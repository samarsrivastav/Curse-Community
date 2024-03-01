import React from 'react';
import course from '../assets/data/Course-Data.json';
import {useLocation} from "react-router-dom"

const Courses = ({}) => {
  const location=useLocation()
  const {pathname}=location
  let coursesData;

  if (pathname === '/web') {
    coursesData = "web";
  } else if (pathname === '/machine-learning') {
    coursesData = "machine-learning";
  } else if(pathname=== '/android'){
    coursesData="android"
  }else if(pathname==='/dsa'){
    coursesData="dsa"
  }
  console.log(course.courses[coursesData])
  return (
    <div className='p-10 pt-36'>
        <div  className="mb-8 text-[#DFF6FF] ">
          <h2 className="text-2xl font-bold mb-4">{coursesData}</h2>
          <div className="overflow-x-auto ">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className='bg-[#031a27]'>
                  <th className="border px-6 py-3">Course Name</th>
                  <th className="border px-6 py-3">YouTuber Name</th>
                  <th className="border px-6 py-3">YouTube Link</th>
                  <th className="border px-6 py-3">Rating</th>
                </tr>
              </thead>
              <tbody>
                {course.courses[coursesData].map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#0d76b2]' : ''}>
                    <td className="border px-6 py-4">{course.course_name}</td>
                    <td className="border px-6 py-4">{course.youtuber_name}</td>
                    <td className="border px-6 py-4">
                      <a
                        href={course.youtube_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Link
                      </a>
                    </td>
                    <td className="border px-6 py-4">{course.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Courses;
