import React from 'react';
import job from '../assets/data/job.json'
import { Link, useParams } from 'react-router-dom';
function JobDetail() {
    const { jobid } = useParams();
    let result = jobid.slice(1);
    console.log(job.jobs[result])
    var job_t = job.jobs[result];
    const about = Object.values(job_t.about);
    const min_qualification = Object.values(job_t.min_qualification);
    const pref_qualification = Object.values(job_t.preferred_qualifications);
    return (
        <>
            {/* //logo */}
            <div className="logo justify-evenly contents h-[300px] py-[100px] md:flex">
                <img src={job_t.logo} alt="logo" />
                <div className='align-middle text-center text-[2.5rem] md:text-[4rem] font-sans text-white'>
                    {job_t.title}
                </div>
            </div>
            {/* ABOUT */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>About {job_t.company}</p>
                {
                    about.map((item, index) => (
                        <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' key={index}>
                            {item}
                        </p>
                    ))}
            </div>
            {/* Minimum */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Minimum Requirements</p>
                {
                    min_qualification.map((item, index) => (
                        <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' key={index}>
                            {item}
                        </p>
                    ))}
            </div>
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Preferred Qualifications</p>
                {
                    pref_qualification.map((item, index) => (
                        <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' key={index}>
                            {item}
                        </p>
                    ))}
            </div>
            {/* deadline */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Deadline:</p>
                <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' >
                    {job_t.deadline}
                </p>
            </div>
            {/* Apply link */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Apply : &nbsp;
                    <Link to={job_t.apply} className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' >
                        Click Here
                    </Link>
                </p>

            </div>
        </>
    );
}

export default JobDetail;