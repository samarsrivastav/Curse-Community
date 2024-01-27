import React from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/images/blog/Gallary1.jpg'
import img2 from '../assets/images/blog/Gallary2.jpg'
import img3 from '../assets/images/blog/Gallary3.jpg'
import img4 from '../assets/images/blog/Gallary4.jpg'
import img5 from '../assets/images/blog/Gallary5.jpg'
export function BlogCorousel() {
    const data = [
        {
            imgelink: "https://www.upgrad.com/__khugblog-next/image/?url=https%3A%2F%2Fd14b9ctw0m6fid.cloudfront.net%2Fugblog%2Fwp-content%2Fuploads%2F2020%2F08%2F895.png&w=750&q=75",
        },
        {
            imgelink: "https://ucarecdn.com/a818d055-fdc4-474b-9f95-b7ebc79fbf10/-/resize/600/",
        },
        {
            imgelink: "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
        },
        {
            imgelink: img4,
        },
        {
            imgelink: img5,
        },
    ];

    const [active, setActive] = React.useState(
        img5,
    );
    
    return (
        <>
            <div className="head text-center">
                <h2 className='text-4xl w-full font-serif'>Read Out Latest Documentation</h2>
                <Link to='/blog'>
                    <p className='text-md text-[#5f4e70] opacity-50 font-sans'>Click to Read More ▶</p>
                </Link>
            </div>
            <div className="grid gap-4">
                <Link to='/blog'>
                    <div className="flex justify-center my-3">
                        <img
                            className="h-auto w-1/4 max-w-full rounded-lg object-cover object-center aspect-video"
                            src={active}
                            alt=""
                        />
                        
                    </div>
                </Link>
                <div className="grid grid-cols-5 gap-2 my-4 mx-auto">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className="h-20 max-w-70 cursor-pointer rounded-lg object-cover object-center aspect-video"
                                alt="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}