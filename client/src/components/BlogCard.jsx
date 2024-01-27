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
    return (
        <>
            <Link to={props.url} className="">
                <div className="w-[85%] max-w-md mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-[60%] overflow-hidden w-[80%] drop-shadow-2xl bg-gray-400 bg-clip-padding transform transition duration-100 hover:scale-105 backdrop-filter  bg-opacity-10 border border-gray-100">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="w-full h-64 object-cover md:w-80 md:h-full  aspect-video" src={props.img} alt="Modern building architecture" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.title}</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.desc.slice(0,100)}...</a>
                            <p className="mt-2 text-slate-500 text-sm text-right">Read More</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}