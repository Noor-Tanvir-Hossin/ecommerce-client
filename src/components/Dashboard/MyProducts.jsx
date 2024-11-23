import React, { useEffect, useState } from 'react';
import Products from './../../pages/Products/Products';
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import useUserData from '../../CustomHooks/useUserData';
import axios from 'axios';
import ProductTable from './ProductTable';
import Loder from '../Loder';


const MyProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoding] = useState(false)
    const userData = useUserData()
    const sallerEmail= userData.email
    const [users, setUsers] = useState([])
    const [latestproducts, setLatestProducts] = useState(true)
    // const [loading, setLoding] = useState(false)
    // const userData = useUserData()
    const token = localStorage.getItem("access-token")
    
    useEffect(() => {
        const fetchProduts = async () => {
            setLoding(true)
            await axios.get(`http://localhost:5000/sellerProduct/${sallerEmail}`)
                .then((res) => { 
                    console.log(res.data);
                    setProducts(res.data)
                    // setWhishlist(res.data), 
                    setLoding(false)
                 })
        };
        if (userData._id && token) {
            fetchProduts()
        }
    }, [sallerEmail , latestproducts])
    // console.log(product);

    const handleDelete = (id) => {
        const productId = id; // Replace with the actual product ID

        // Send the DELETE request to the server
        axios.delete(`http://localhost:5000/deleteProduct/${productId}`)
            .then(response => {
                console.log(response.data.message); // Handle the success message (e.g., "Product deleted successfully")
                setLatestProducts((prev)=> !prev)
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
            <h1 className='text-2xl font-bold text-center mb-10'>My Products</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        
     
    {
                        loading ? (<Loder></Loder>) : (
                            <>
                                {
                                    products.length === 0 ? (<div className='w-full h-full flex items-center justify-center'>
                                        <h1 className='text-3xl font-bold'>No product Found</h1>
                                    </div>) : <>
                                    {
                                            products.map((product) => (<ProductTable key={product._id} product={product} handleDelete={handleDelete} />))
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

export default MyProducts;