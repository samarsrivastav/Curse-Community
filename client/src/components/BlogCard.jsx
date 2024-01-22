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
            <Link to={props.url}>
                <Card className="max-w-180 h-100 m-3 overflow-hidden w-[80%] drop-shadow-2xl bg-gray-400 bg-clip-padding transform transition duration-100 hover:scale-105 backdrop-filter  bg-opacity-10 border border-gray-100">
                    <div className="flex justify-between">

                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none w-1/2"
                        >
                            <img className="h-full aspect-video"
                                src={props.img}
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <div className="w-1/2">
                            <CardBody className="p-5">
                                <Typography variant="h4" color="blue-gray">
                                    {props.title}
                                </Typography>
                                <Typography variant="lead" color="gray" className="mt-1 text-base font-normal">
                                    {props.desc.slice(0, 200)}...
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex items-right justify-end p-2">
                                <Typography className="font-normal ">
                                    Click for More
                                </Typography>
                            </CardFooter>
                        </div>
                    </div>

                </Card>
            </Link>
        </>
    );
}