import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';
// import UpdateRole from './UpdateRole';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';



const UpdateRole = () => {

    const { id } = useParams();

    const { createUser } = useAuth()

    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        // const email = data.email
        // const name = data.displayName
        // const password = data.password
        const role = data.role
        // const status = role === "Buyer" ? "approved" : "pending"
        // const whishList = []
        // const cart = []

        const userData = {
            role
        }

        // name, email,, cart, whishList
        console.log(userData);

        // createUser(data.email, data.password)
        // .then (() =>{
        //     axios.post('http://localhost:5000/users',userData)
        //     .then((res) =>{
        //         console.log(res.data);
        //         if(res.data.insertedId){
        //             Swal.fire({
        //                 position: "success",
        //                 icon: "success",
        //                 title: "Registered Successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //               });
        //               navigate("/")
        //         }

        //     })
        // })

        axios.patch(`http://localhost:5000/updateRole/${id}`, userData)
        .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                reset()
                Swal.fire({
                    position: "success",
                    icon: "success",
                    title: "UserRole Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        })




    }




    return (
        <div>
            <h1 className='text-xl font-semibold text-center'>UpdateRole</h1>
            <form className=" flex flex-col gap-5  " onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center justify-center'>
                    <div className="mt-6">
                        <div className="mt-3 md:flex flex-col  md:-mx-2">
                            <label className="label">
                                <span className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Select type of account</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs"
                                {...register("role", { required: true })}
                            >
                                <option>Buyer</option>
                                <option>Saller</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type='submit'>
                    <a href="#_" className="relative inline-block px-5 py-2.5 font-medium text-white group">
                        <span className="absolute inset-0 rounded bg-gradient-to-br from-purple-600 to-blue-500 blur-sm opacity-50"></span>
                        <span className="absolute inset-0 rounded bg-gradient-to-br from-purple-600 to-blue-500 opacity-50 group-active:opacity-0"></span>
                        <span className="absolute inset-0 rounded bg-gradient-to-br from-blue-500 to-purple-600 transition duration-200 ease-out"></span>
                        <span className="relative">Update</span>
                    </a>

                </button>
            </form>
        </div>
    );
};

export default UpdateRole;