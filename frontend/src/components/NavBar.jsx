import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo/abbs-logo-transparent.png'

//===================React Logo==================
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";

function NavBar() {
  return (
    <div className='bg-blue-500 pt-3 pb-3 pl-5 pr-15 flex items-center justify-between '>
      <NavLink to="/">
      <div className='flex items-center gap-2 cursor-pointer select-none'>
       <img className='h-[65px] w-[65px] rounded-full bg-orange-200 hover:scale-1' src={Logo} alt="Alpha Beta Boarding School's Logo" />
        <h3 className='text-2xl tracking-wide text-white '>ABBS School</h3>
      </div>
    </NavLink>

      <ul className='flex md:flex-row sm:absolute md:static md:right-0 sm:right-5  sm:p-10 md:p-2 bg-inherit  flex-col gap-7'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `flex md:flex-col text-xl md:gap-0 sm:flex-row sm:gap-6 flex-col items-center cursor-pointer ${isActive ? "text-pink-700" : "text-emerald-100 hover:text-pink-700"}`}
          >
            <BiHome />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Activities"
            className={({ isActive }) => `flex md:flex-col text-xl md:gap-0 sm:flex-row sm:gap-6 flex-col items-center cursor-pointer ${isActive ? "text-pink-700" : "text-emerald-100 hover:text-pink-700"}`}
          >
            <RiCalendarEventLine />
            Activities
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Gallery"
            className={({ isActive }) => `flex md:flex-col text-xl md:gap-0 sm:flex-row sm:gap-6 flex-col items-center cursor-pointer ${isActive ? "text-pink-700" : "text-emerald-100 hover:text-pink-700"}`}
          >
            <IoMdPhotos />
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => `flex md:flex-col text-xl md:gap-0 sm:flex-row sm:gap-6 items-center cursor-pointer ${isActive ? "text-pink-700" : "text-emerald-100 hover:text-pink-700 sm:flex-row sm:gap-6"}`}
          >
            <MdOutlineEmail />
            Contact
          </NavLink>
        </li>

      </ul>

    </div>
  )
}

export default NavBar