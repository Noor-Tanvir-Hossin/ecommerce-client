import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useUserData from '../../CustomHooks/useUserData';
import ProductCard from '../ProductCard';

const MyCarts = () => {

    const [cart, setCart] = useState([])
    const [loading, setLoding] = useState(false)
    const [latestCart, setLatestCart] = useState(true)
    // const [nWhishList, setInWhishList] = useState(true)
    const userData = useUserData()
    const token = localStorage.getItem("access-token")

    useEffect(() => {
        const fetchCart = async () => {
            setLoding(true)
            await axios.get(`http://localhost:5000/cart/${userData._id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((res) => { setCart(res.data), setLoding(false) })
        };
        if (userData._id && token) {
            fetchCart()
        }
    }, [token, userData._id, latestCart])


    return (
        <div className='border border-red-300 '>
            <h1 className='text-2xl font-bold text-center'>MyCart</h1>

            <div className=''>
                {
                    loading ?
                        (<p>Loading...</p>) : (
                            <>
                                {
                                    cart.length > 0 ? (
                                        cart.map((product) => 
                                            <div className='grid grid-cols-1 p-3 md:grid-cols-3 gap-7 h-full w-full' key={product._id}  >
                                                <ProductCard productt={product} isInCart setCart={setCart} setLatestCart={setLatestCart}></ProductCard>
                                            </div>
                                        )
                                    ) : (<div className='w-full h-full flex items-center justify-center'>
                                        <h1>No products in your Cart</h1>
                                    </div>)
                                }
                            </>
                        )

                }
            </div>
        </div>
    );
};

export default MyCarts;