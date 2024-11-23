import { AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <h1 className='text-2xl font-extrabold'>ShopVerse</h1>

                <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                <div className="flex -mx-2">
                    <a
                        href="#"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        aria-label="Reddit"
                    >
                        <SiFacebook />
                    </a>

                    <a
                        href="#"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        aria-label="Facebook"
                    >
                       <FaInstagramSquare />
                    </a>

                    <a
                        href="#"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        aria-label="Github"
                    >
                        <AiFillGoogleCircle />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;