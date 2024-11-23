import { useEffect, useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';
import axios from 'axios';
import FeaturedCard from './FeaturedCard';
import ProductCard from '../../components/ProductCard';

// import useAuth from './useAuth';

const FeaturedProduct = () => {

    const { user, loading } = useAuth()
    // console.log(user.email);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
            const res = await axios.get(`http://localhost:5000/featured/products`)
            // console.log(res.data);
            setProducts(res.data)


        };
        fetchProductData()
    }, [loading]);




    return (
        <div className='my-8'>
            <h1 className='text-2xl font-bold text-center mb-8'>Our Products</h1>
            {/* <h1 className='text-xl font-bold text-center'>{product.title}</h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.map((product) => (<ProductCard key={product._id} productt={product}  ></ProductCard>))
                }
            </div>
        </div>
    );
};

export default FeaturedProduct;