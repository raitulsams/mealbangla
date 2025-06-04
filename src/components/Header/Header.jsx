import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar bg-[#1e1b17] shadow-sm">
            <div className='w-full lg:w-[1200px] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#1e1b17]  rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/home" className={({ isActive }) => {
                                return isActive ? "text-orange-500" : "text-white";
                            }}>Home</NavLink></li>
                            <li> <NavLink to="/categories" className={({ isActive }) => {
                                return isActive ? "text-orange-500" : "text-white";
                            }}>Categories</NavLink>
                                {/* <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul> */}
                            </li>
                            <li><NavLink to="/contact" className={({ isActive }) => {
                                return isActive ? "text-orange-500" : "text-white";
                            }}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <NavLink to="/home">
                            <img className='w-[200px]' src="./assests/logo.png" alt="" />
                        </NavLink>

                    </div>


                </div>
                <div className='lg:navbar-end'>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white/[.55]">
                            <li><NavLink to="/home" className={({ isActive }) => {
                                return isActive ? "text-orange-500" : "text-white";
                            }}>Home</NavLink></li>
                            <li><NavLink to="/categories" className={({ isActive }) => {
                                return isActive ? "text-orange-500" : "text-white";
                            }}>Categories</NavLink>
                                {/* <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details> */}
                            </li>
                            <li><NavLink to="/contact" className={({ isActive }) => {
                                return isActive ? "text-orange-500" : "text-white";
                            }}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header