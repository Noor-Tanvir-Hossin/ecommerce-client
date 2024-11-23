import useUserData from "../../CustomHooks/useUserData";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const ContactSection = () => {

    const user= useUserData()
    return (
        <section className="bg-gray-50 py-12 rounded-md" id="contact">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600 mt-2">We’d love to hear from you. Reach out to us for any questions or support.</p>
                </div>
                <div className="flex justify-center items-center -mx-4">
                    {/* Contact Form */}
                    {/* <div className="w-full lg:w-1/2 px-4">
                        <form className="bg-white shadow-md rounded-lg p-6">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div> */}
                    {/* Contact Info */}
                    <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="text-indigo-600 text-xl mr-4">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="text-gray-700">{user.email}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-600 text-xl mr-4">
                                        <i className="fas fa-phone-alt"></i>
                                    </span>
                                    <span className="text-gray-700">018546546546</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-600 text-xl mr-4">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    <span className="text-gray-700">123 Main Street, chittagong, Bangladesh</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold text-gray-800">Follow Us</h4>
                                <div className="flex space-x-4 mt-2">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                                    <SiFacebook />
                                    </a>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                                    <FaInstagramSquare />
                                    </a>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                                    <AiFillGoogleCircle />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactSection;