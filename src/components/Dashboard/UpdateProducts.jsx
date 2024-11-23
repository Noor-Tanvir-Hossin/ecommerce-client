import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../CustomHooks/useAuth';
// import axios from 'axios';
// import useAuth from '../../CustomHooks/useAuth';

const UpdateProducts = () => {
    const { id } = useParams();
    // console.log(id);
    const [product, setProduct] = useState([]);
    const [loading, setLoding] = useState(false)

    useEffect(() => {
        const fetchProductData = async () => {
            setLoding(true)
            await axios.get(`http://localhost:5000/products/${id}`)

                .then((res) => {
                    console.log(res.data),
                        setProduct(res.data),
                        setLoding(false)
                })


        };
        fetchProductData()
        // if (user?.email && !loading) {

        // };
    }, [id]);

    const { user } = useAuth()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = (data) => {

        const title = data.title
        const brand = data.brand
        const image = data.image
        const price = parseFloat(data.price)
        const stock = parseFloat(data.stock)
        const category = data.category
        const description = data.description
        // const sallerEmail = user.email

        const products = {
            title, brand, price, stock, category, description,  image
        }
        console.log(products);
        // const token = localStorage.getItem("access-token")

        axios.patch(`http://localhost:5000/updateProduct/${id}`, products)
        .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount>0) {
                reset()
                Swal.fire({
                    position: "success",
                    icon: "success",
                    title: "Product Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        })


    }






    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-12'>Update Product</h1>



            <div className="card bg-base-100 w-full shadow-2xl">
                <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue={product.title} placeholder="Product Title" className="input input-bordered"
                                {...register("title")}
                            />
                            {/* {errors.title && <span className='text-red-500 text-sm font-light'>Title is required</span>} */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" defaultValue={product.brand} placeholder="Brand" className="input input-bordered"
                                {...register("brand")}
                            />
                            {/* {errors.brand && <span className='text-red-500 text-sm font-light'>Brand is required</span>} */}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={product.price} placeholder="Price" className="input input-bordered"
                                {...register("price")}
                            />
                            {/* {errors.price && <span className='text-red-500 text-sm font-light'>Brand is required</span>} */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input type="number" defaultValue={product.stock} placeholder="Stock" className="input input-bordered"
                               {...register("stock")}
                            />
                            {/* {errors.stock && <span className='text-red-500 text-sm font-light'>Stock is required</span>} */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" defaultValue={product.category} placeholder="Category" className="input input-bordered"
                               {...register("category")}
                            />
                            {/* {errors.category && <span className='text-red-500 text-sm font-light'>Category is required</span>} */}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" defaultValue={product.image} placeholder="ImageURL" className="input input-bordered"
                            {...register("image")}
                        />
                        {/* {errors.image && <span className='text-red-500 text-sm font-light'>image is required</span>} */}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" defaultValue={product.description} placeholder="Product Description" className="input input-bordered"
                           {...register("description")}
                        />
                        {/* {errors.description && <span className='text-red-500 text-sm font-light'>Description is required</span>} */}
                    </div>

                    <div className='my-8'>
                        <button  type='submit' className='btn btn-primary w-full'>Update Product</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProducts;