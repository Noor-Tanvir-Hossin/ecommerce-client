import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useUserData from '../../CustomHooks/useUserData';
import ProductCard from '../ProductCard';
// import useUserData from '../../../customHooks/useUserData';
// import Product from '../../Product';

const MyWhishlist = () => {

    const [whishlist, setWhishlist] = useState([])
    const [loading, setLoding] = useState(false)
    const [latestWhish, setLatestWhish] = useState(true)
    // const [nWhishList, setInWhishList] = useState(true)
    const userData = useUserData()
    const token = localStorage.getItem("access-token")

    useEffect(() => {
        const fetchWhishlist = async () => {
            setLoding(true)
            await axios.get(`http://localhost:5000/whishlist/${userData._id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((res) => { setWhishlist(res.data), setLoding(false) })
        };
        if (userData._id && token) {
            fetchWhishlist()
        }
    }, [token, userData._id, latestWhish])


    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>My Whishlist</h1>

            <div>
                {
                    loading ?
                        (<p>Loading...</p>) : (
                            <>
                                {
                                    whishlist.length > 0 ? (
                                        whishlist.map((product) => (
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full' key={product._id}  >
                                                <ProductCard productt={product} isInWhishlist setLatestWhish={setLatestWhish} latestWhish={latestWhish}></ProductCard>
                                            </div>
                                        ))
                                    ) : (<div className='w-full h-full flex items-center justify-center'>
                                        <h1>No products in your whishlist</h1>
                                    </div>)
                                }
                            </>
                        )

                }
            </div>
        </div>
    );
};

export default MyWhishlist;