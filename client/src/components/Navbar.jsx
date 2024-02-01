import React from "react";
import {
  Navbar,
  
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
       <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/learning" className="flex items-center">
          Learning
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/blog" className="flex items-center">
          Blogs
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
    <div className="" >
      
      <Navbar className="lg:stiky fixed top-0 z-10 h-max max-w-full rounded-none px-4  lg:px-8 lg:py-4 backdrop-blur-sm shadow-md bg-opacity-50  bg-clip-padding' bg-[#06283D]">

        <div className="flex items-center justify-between ">
          <Link to='/'>
          <Button
                variant="black"
                size="sm"
                className="hidden lg:inline-block"
                
              >
                <span>BitByte</span>
          </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <div className="flex items-center gap-x-1">
              <Button
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                
              >
                <span>Sign in</span>
              </Button>
            </div> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
export default StickyNavbar