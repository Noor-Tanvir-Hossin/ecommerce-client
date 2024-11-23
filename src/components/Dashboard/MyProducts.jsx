import React, { useEffect, useState } from 'react';
import Products from './../../pages/Products/Products';
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import useUserData from '../../CustomHooks/useUserData';
import axios from 'axios';
import ProductTable from './ProductTable';


const MyProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoding] = useState(false)
    // const [latestWhish, setLatestWhish] = useState(true)
    // const [nWhishList, setInWhishList] = useState(true)
    const userData = useUserData()
    const sallerEmail= userData.email
    // console.log(userData.email);
    const token = localStorage.getItem("access-token")
    // console.log(nWhishList);
    
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
    }, [sallerEmail])
    // console.log(product);


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
                        loading ? (<p>Loading ...</p>) : (
                            <>
                                {
                                    products.length === 0 ? (<div className='w-full h-full flex items-center justify-center'>
                                        <h1 className='text-3xl font-bold'>No product Found</h1>
                                    </div>) : <>
                                    {
                                            products.map((product) => (<ProductTable key={product._id} product={product} />))
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