import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    About Us
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to <strong>[Your Business Name]</strong>. We are passionate about bringing you the finest quality products at prices you’ll love. Our eCommerce store was created to offer a seamless shopping experience, combining the convenience of technology with the charm of personalized service.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    To revolutionize the online shopping experience by offering:
                </p>
                <ul className="list-disc list-inside text-gray-700 my-4">
                    <li>A curated selection of top-quality products.</li>
                    <li>Exceptional customer service.</li>
                    <li>Fast and reliable delivery right to your doorstep.</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <strong>Quality Products:</strong> We work directly with trusted brands and suppliers to ensure every product meets the highest standards.
                    </li>
                    <li>
                        <strong>Secure Shopping:</strong> Your data is safe with us, thanks to advanced encryption and secure payment options.
                    </li>
                    <li>
                        <strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. Our team is available to assist with questions, concerns, or support.
                    </li>
                    <li>
                        <strong>Fast Shipping:</strong> We aim to deliver your orders swiftly, so you can enjoy your purchases without delay.
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Story</h2>
                <p className="text-gray-700">
                    Founded in <strong>[Year]</strong>, <strong>[Your Business Name]</strong> started as a small idea driven by a passion for [mention specific niche or values]. Over the years, we’ve grown into a thriving online store, loved by customers from all walks of life.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Join Our Journey</h2>
                <p className="text-gray-700">
                    We’re constantly evolving to bring you the best shopping experience. Thank you for choosing <strong>[Your Business Name]</strong>. Let’s build a better shopping community together!
                </p>
                <p className="mt-6 text-gray-700">
                    For inquiries, collaborations, or feedback, <a href="/contact" className="text-blue-500 underline">contact us</a> anytime.
                </p>
            </div>
        </div>
    );
};

export default About;