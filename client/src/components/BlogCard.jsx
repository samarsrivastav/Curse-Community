import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function BlogCard(props) {
    var url="/jobdetail/:"+props.url
    return (
        <>
            <Link to={url} className="">
                <div className=" max-w-md mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-[90%] overflow-hidden w-[full] drop-shadow-2xl bg-gray-400 bg-clip-padding transform transition duration-100 hover:scale-105 backdrop-filter  bg-opacity-10 border border-gray-100">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="w-full h-64 object-cover md:w-[100%] md:h-48  aspect-square" src={props.img} alt="Modern building architecture" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-[1.78rem] text-[#e2f6ff]font-semibold">{props.title}</div>
                            <p  className="block mt-1 text-lg leading-tight font-medium text-[#DFF6FF] ">{props.desc.slice(0,400)}...</p>
                            <p className="mt-2 text-[#DFF6FF] text-sm text-right">Read More</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}