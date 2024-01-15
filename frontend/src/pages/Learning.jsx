import React from 'react';
import web from '../assets/data/Web.json';


const Learning = ({}) => {
  return (
    <div className='p-10 pt-36'>
      {Object.keys(web.courses).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-6 py-3 bg-gray-200">Course Name</th>
                  <th className="border px-6 py-3 bg-gray-200">YouTuber Name</th>
                  <th className="border px-6 py-3 bg-gray-200">YouTube Link</th>
                  <th className="border px-6 py-3 bg-gray-200">Rating</th>
                </tr>
              </thead>
              <tbody>
                {web.courses[category].map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
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
      ))}
    </div>
  );
};

export default Learning;
