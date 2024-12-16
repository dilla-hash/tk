import React from "react";
import Logo2 from "../assets/Logo2.png";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import Login from "./Login";

const NavMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
        delay: 0.1
    },
    {
        id: 2,
        title: "About",
        path: "/",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Menu",
        path: "/",
        delay: 0.3,
    },
    {
        id: 4,
        title: "Contac Us",
        path: "/",
        delay: 0.4,
    },
];

const Navbar = () => {
    return (
        <div className="shadow-md bg-white dark:bd-gray-900 dark:text-white duration-200 relative z-40">
     
            <div className="bg-blue-300 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="#"
                        className="font-bold text-2xl sm:text-3xl flex gap-2 text-black">
                            <img src={Logo2} alt="Logo" 
                            className="w-10 uppercase"/>
                            T.teguh
                        </a>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="search" className="w-[200px]
                            sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full
                            border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-blue-400 text-black"/>
                            <IoMdSearch 
                            className="text-gray-500 group-hover:text-primary absolute translate-y-1/2
                            right-3 justify-between items-center top-0"/>
                        </div>
                    <button
                    onClick={() => alert("Ordering not available yet")}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-200
                    text-black py-1 px-4 rounded-full flex items-center gap-3 group">
                        <span className="group-hover:block hidden transition-all duration-200"
                        onClick={() => document.getElementById("my_modal_3").showModal()}>Login</span>
                       <MdAccountCircle
                       className="text-xl text-black drop-sm cursor-pointer"/>
                      <Login/>
                    </button>
                    </div>
                </div>
            </div>
            <div className="justify-center flex">
            <ul className="sm:flex hidden items-center gap-4">{
            NavMenu.map((menu) => { 
                return (
                    <li
                        key={menu.id}
                        className="nav-menu"
                        data-delay={menu.delay}>
                            <a href={menu.path} className="inline-block px-4 hover:text-blue-600 duration-200 text-black">{menu.title}</a>
                    </li>
                );
            })
            }</ul>

            </div>
        </div>
    )
};

export default Navbar;