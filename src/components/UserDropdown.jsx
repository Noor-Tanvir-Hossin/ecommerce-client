import React, { useState } from 'react';
import useAuth from '../CustomHooks/useAuth';
import useUserData from '../CustomHooks/useUserData';
import { Link } from 'react-router-dom';

const UserDropdown = () => {
    const { user, LogOut } = useAuth()
    const {name, email}= useUserData()
    // console.log(name);

    const handleLogout = () => {
        LogOut()
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };


    return (
        <div className="relative inline-block">
            {/* Dropdown toggle button */}
            <button
                onClick={toggleDropdown}
                className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
            >
                <span className="mx-1">{name? name : "unknown"}</span>
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                </svg>
            </button>


            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                >
                    <a href="#" className="flex items-center gap-2 p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <img
                            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src={`${user?.photoURl || "/user.png"}`}
                            alt="userPhoto"
                        />
                        <div className="mx-1">
                            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
                        </div>
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700" />

                    <Link to="/dashboard/overview" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Dashboard
                    </Link>

                    

                   

                    <hr className="border-gray-200 dark:border-gray-700" />

                    
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        LogOut
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;