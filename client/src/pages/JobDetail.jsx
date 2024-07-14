import { useEffect,useState } from 'react';
import React  from 'react';
import job from '../assets/data/job.json'
import { Link, useParams } from 'react-router-dom';
function JobDetail() {
    const { jobid } = useParams();
    let result = jobid.slice(1);
    const [curr, setCurr] = useState({
        about: [],
        min_qualification: [],
        preferred_qualifications: [],
        logo: '',
        title: '',
        company: '',
        deadline: '',
        apply: ''
    });
    
    useEffect(() => {
        const getJobRequest = async (result) => {
            try {
                const url = `http://localhost:4000/api/job/${result}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const responseJson = await response.json();
                // console.log('Response from API:', responseJson);
                setCurr(responseJson);
            } catch (error) {
                console.error('Error fetching job:', error);
            }
        };

        getJobRequest(result);
    }, [result]);

    // console.log(curr)
    const about = Object.values(curr.about);
    const min_qualification =Object.values(curr.min_qualification) ;
    const pref_qualification =Object.values(curr.preferred_qualifications) ;
    
    return (
        <>
            {/* //logo */}
            <div className="logo justify-evenly contents h-[300px] py-[100px] md:flex">
                <img src={curr.logo} alt="logo" />
                <div className='align-middle text-center text-[2.5rem] md:text-[4rem] font-sans text-white'>
                    {curr.title}
                </div>
            </div>
            {/* ABOUT */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>About {curr.company}</p>
                {
                    about.map((item, index) => (
                        <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' key={index}>
                            {item}
                        </p>
                    ))
                }
            </div>
            {/* Minimum */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Minimum Requirements</p>
                { 
                    min_qualification.map((item, index) => (
                        <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' key={index}>
                            {item}
                        </p>
                    )) 
                }
            </div>
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Preferred Qualifications</p>
                {
                    pref_qualification.map((item, index) => (
                        <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' key={index}>
                            {item}
                        </p>
                    ))
                } 
            </div>
            {/* deadline */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Deadline:</p>
                <p className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' >
                    {curr.deadline}
                </p>
            </div>
            {/* Apply link */}
            <div className="about w-[80%] mx-auto">
                <p className=' text-[2rem] font-sans text-white my-3'>Apply : &nbsp;
                    <Link to={curr.apply} target='_blank' className=' text-[1rem] text-justify font-sans text-white opacity-80 my-3' >
                        Click Here
                    </Link>
                </p>

            </div>
        </>
    );
}

export default JobDetail;