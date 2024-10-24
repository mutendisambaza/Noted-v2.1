import { useState } from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";


import {Menu, X} from "lucide-react"

export const Navbar = () => {
  const[mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () =>{
    setMobileDrawerOpen (!mobileDrawerOpen) ;
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  bg-transparent">
      <div className="container px-4 mx-auto realtive text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2"src={logo} alt="logo" />
            {/* <span className="text-xl tracking-tight">Noted</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li >
              {/* <a className=" hover:text-key-red" href="#">History</a> */}
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="" className="py-2 px-3 border rounded-md"> Log In</a>
            <a href="" className="bg-gradient-to-r from-key-red to-darker-red py-2 px-3 rounded-md"> Sign In</a> */}
            <Link to="/register" className="py-2 px-3 border rounded-md">Register</Link>
            <Link to="/signIn" className="bg-gradient-to-r from-key-red to-darker-red py-2 px-3 rounded-md">Sign In</Link>
          </div>
          <div className="lg:hidden md-flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
        {mobileDrawerOpen && 
          <div className="fixed right-0 z-20 bg-background-black w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <Link to="/register" className="py-2 px-3 border mb-10 rounded-md">Register</Link>
              <Link to="/signIn" className="bg-gradient-to-r from-key-red to-darker-red py-2 px-3 rounded-md">Sign In</Link>
            </div>
      }
      </div>

    
    </nav>
  )
}
