import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="relative bg-gray-900 mb-10">
            
            <div
                className="w-full bg-cover bg-center h-[38rem]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/50">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-white lg:text-5xl">
                            Transform Your <span className="text-blue-400">Shopping</span> Experience
                        </h1>
                        <p className="mt-4 text-gray-300 text-lg">
                            Discover high-quality products with exclusive deals and fast delivery.
                        </p>
                        <div className="mt-6">
                            <button className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-500 transition">
                                <Link to='/products'>Shop Now</Link>
                            </button>
                            <button className="ml-4 px-6 py-3 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition">
                            <Link to='/about'>Learn More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Hero;