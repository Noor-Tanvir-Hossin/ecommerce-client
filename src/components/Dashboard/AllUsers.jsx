import React, { useEffect, useState } from 'react';
import useUserData from '../../CustomHooks/useUserData';
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from 'axios';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const [latestUsers, setLatestUsers] = useState(true)
    const [loading, setLoding] = useState(false)
    const userData = useUserData()

    useEffect(() => {
        const fetchUsers = async () => {
            setLoding(true)
            await axios.get(`http://localhost:5000/users`)
                .then((res) => {
                    console.log(res.data);
                    setUsers(res.data)
                    // setWhishlist(res.data), 
                    setLoding(false)
                })
        };
        fetchUsers()
    }, [latestUsers])

    // console.log(users.length);

    const handleDelete = (id) => {
        const userId = id; // Replace with the actual product ID

        // Send the DELETE request to the server
        axios.delete(`http://localhost:5000/deleteUserInfo/${userId}`)
            .then(response => {
                console.log(response.data.message); // Handle the success message (e.g., "Product deleted successfully")
                setLatestUsers((prev)=> !prev)
            })
            .catch(error => {
                if (error.response) {
                    console.error('Error response:', error.response.data.message); // Handle specific error message
                } else {
                    console.error('Error:', error.message); // Handle other errors
                }
            });
    }



    return (
        <div className="">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Delete</th>



                    </tr>
                </thead>
                <tbody>


                    {
                        loading ? (<p>Loading ...</p>) : (
                            <>
                                {
                                    users.length === 0 ? (<p>no user found</p>) : <>
                                        {
                                            users.map((user) => (<tr className="hover" key={user._id}>

                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role}</td>
                                                <td><button className='btn btn-grey'><CiEdit size={20} /></button></td>
                                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-grey'><AiTwotoneDelete size={20} /></button></td>




                                            </tr>))
                                        }
                                    </>
                                }
                            </>
                        )
                    }



                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;