import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function FooterComponent() {
  return (
    <footer className="w-full bg-[#06344f] p-8 mt-auto">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500"
            >
              <Link to='/about'>
                About Us
              </Link>
            </Typography>
          </li>
          <li>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500"
            >
              <Link to='/learning'>
                Learning
              </Link>
            </Typography>
          </li>
          <li>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500"
            >
              <Link to='/blog'>
                Blog
              </Link>
            </Typography>
          </li>
          <li>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500"
            >
              <Link to='/contact'>
                Contact Us
              </Link>
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Bit Byte
      </Typography>
    </footer>
  );
}
export default FooterComponent