import React from 'react';
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';
// import SeachBar from '../../components/SeachBar';
// import SortByPrice from '../../components/SortByPrice';
// import FilterBar from '../../components/FilterBar';
import axios from 'axios';
// import Product from '../../components/Product';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Searchbar from '../../components/Searchbar';
import SortByPrice from '../../components/SortByPrice';
import FilterBar from '../../components/FilterBar';

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("asc")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [uniqueBrand, setUniqueBrand] = useState([])
    const [uCategory, setUCategory] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        const fetch = async () => {
            axios.get(`http://localhost:5000/all-product?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`).then((res) => {
                // console.log(res.data);
                setProducts(res.data.products)
                setUniqueBrand(res.data.brands)
                setUCategory(res.data.categories)
                setTotalPage(Math.ceil(res.data.totalProducts / 9))
                setLoading(false)

            })
        }
        fetch()
    }, [brand, category, sort, search, page])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.search.value);
        e.target.search.value = ""
    }

    const handleReset = () => {
        setSearch('')
        setBrand('')
        setCategory('')
        setSort("asc")
        window.location.reload()
    }

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPage) {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }






    return (
        <div className='constainer mx-auto w-[80%]'>
            <h1 className='my-8 text-2xl font-semibold text-center'>All Products</h1>
            {/* searching and sorting */}
            <div className='grid grid-cols-1 gap-4 mb-5 md:flex justify-between items-center w-full'>
                <Searchbar handleSearch={handleSearch}></Searchbar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>
            <div className='flex flex-col  md:grid grid-cols-12 gap-4'>
                <div className='col-span-2 h-64'><FilterBar setCategory={setCategory}
                    setBrand={setBrand} handleReset={handleReset} uniqueBrand={uniqueBrand} uCategory={uCategory}></FilterBar></div>
                <div className='col-span-10 my-4'>
                    {
                        loading ? (<p>Loading ...</p>) : (
                            <>
                                {
                                    products.length === 0 ? (<div className='w-full h-full flex items-center justify-center'>
                                        <h1 className='text-3xl font-bold'>No product Found</h1>
                                    </div>) : (<div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                                        {
                                            products.map((product) => (<ProductCard key={product._id} productt={product} />))
                                        }
                                    </div>)
                                }
                            </>
                        )
                    }
                    <div className='flex justify-center items-center gap-2 my-9'>
                        <button className='p2 border rounded-full border-black' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                            <FaRegArrowAltCircleLeft />
                        </button>
                        <p>
                            page {page} of {totalPage}
                        </p>
                        <button className='p2 border rounded-full border-black' onClick={() => handlePageChange(page + 1)} disabled={page === "totalPage"}>
                            <FaRegArrowAltCircleRight />
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Products;