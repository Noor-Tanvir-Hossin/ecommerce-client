import React, { useState } from 'react';
import UserDropdown from '../UserDropdown';
import { Link } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';

const Navbar = () => {
   const{user}=useAuth()
  //  console.log(user);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className='flex gap-3 items-center justify-center'>
          <img className='h-10 w-10 rounded-full object-cover' src="/public/design-null.png" alt="" />
          <h1 className='text-3xl font-extrabold'>
          ShopVerse
          </h1>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
              <svg
                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              About
            </Link>
           
          </div>

          <div className="flex justify-center md:block">
            {
              user? <UserDropdown></UserDropdown> : <>
               <Link
              to="/register"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Login
            </Link>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;