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
            imgelink: img1,
        },
        {
            imgelink: img2,
        },
        {
            imgelink: img3,
        },
        {
            imgelink: img4,
        },
        {
            imgelink: img5,
        },
    ];

    const [active, setActive] = React.useState(
        img4,
    );

    return (
        <>
            <div className="head text-center">
                <h2 className='text-4xl w-full font-serif'>Read Out Latest Documentation</h2>
                <Link to='/blog'>
                    <p className='text-md text-[#5f4e70] opacity-50 font-sans'>Read More ▶</p>
                </Link>
            </div>
            <div className="grid gap-4">
                <div className="flex justify-center my-3">
                    <img
                        className="h-auto w-1/4 max-w-full rounded-lg object-cover object-center aspect-video"
                        src={active}
                        alt=""
                    />
                </div>
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