import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState([]);
    const [loading, setLoding] = useState(false)

      

    

    useEffect(() => {
        const fetchProductData = async () => {
            setLoding(true)
            await axios.get(`http://localhost:5000/products/${id}`)

                .then((res) => {
                    // console.log(res.data),
                    setProduct(res.data),
                    setLoding(false)
                })


        };
        fetchProductData()
        // if (user?.email && !loading) {

        // };
    }, [id]);
    const products = product.length === 0

    if (products) {
      return <div>Product not found!</div>;
    }

    console.log(product);

    return (
        <div className='flex justify-center items-center my-10'>
            <div className="w-2/4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img
                    className="w-full h-full object-cover "
                    src={product.image}
                    alt={product.title}
                />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Brand: {product.brand}</span>
                        
                        <h1 className='textxl font-semibold my-2'>Model: {product.title}</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          Category: {product.category}
                        </p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                         Price: ${product.price}
                        </p>
                        
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                         Stock: {product.stock}
                        </p>
                        
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {product.description}
                        </p>
                    </div>

                   
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;