import React from 'react';
import useUserData from '../../CustomHooks/useUserData';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import useAuth from '../../CustomHooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';


const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {

        const name= data.name
        const email= data.email
        const photo= data.photo
        const comment= data.comment 
        
        
        const review ={
            name, email, photo, comment
        }
        // console.log(review);

        axios.post("http://localhost:5000/add-reviews",review) .then((res) => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "success",
                    icon: "success",
                    title: "Thanks for your opinion",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 
            }
        })

        
    }
 
    const data = useUserData()
    const user= useAuth()

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white shadow-lg p-6 text-center rounded-lg">
                        <div className="text-xl font-bold mb-2">Address</div>
                         <p>Chittagong, Bangladesh.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 text-center rounded-lg">
                        <div className="text-xl font-bold mb-2">Phone</div>
                        <p>0184564654899</p>
                        <p>018265479215</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 text-center rounded-lg">
                        <div className="text-xl font-bold mb-2">Email</div>
                        <p>{data.email}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 text-center rounded-lg">
                        <div className="text-xl font-bold mb-2">Follow Us</div>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-blue-500"><SiFacebook /></a>
                            <a href="#" className="text-blue-300"><FaInstagramSquare /></a>
                            <a href="#" className="text-pink-500"><AiFillGoogleCircle /></a>
                            
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-center mb-6">Leave us a Message</h2>
                    <p className="text-gray-600 text-center mb-8">
                    Let us know how we can assist you. Your feedback helps us improve and serve you better.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1  gap-7 mb-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='w-full '>
                                <label  className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="firstName" className="mt-1  w-2/3 rounded-md border-gray-600 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 " placeholder="Your Name" 
                                {...register("name")}
                                />
                            </div>
                            <div>
                                <label  className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1  w-2/3 rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Email"
                                {...register("email")}
                                />
                            </div>
                            </div>
                            <div className='w-full '>
                                <label  className="block text-sm font-medium text-gray-700">PhotoUrl</label>
                                <input type="text" id="firstName" className="mt-1  w-2/3 rounded-md border-gray-600 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 " placeholder="phtourl" 
                                 {...register("photo")}
                                />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                            <textarea id="comment" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3" placeholder="Write your message here..."
                            {...register("comment")}
                            ></textarea>
                        </div>
                            
                        </div>
                       
                        
                        <div className="text-center">
                            <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;