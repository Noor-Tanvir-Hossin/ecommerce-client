import axios from 'axios';
import Swal from 'sweetalert2';
import { FaRegHeart } from "react-icons/fa";
import { IoHeartDislikeOutline } from "react-icons/io5";
import useAuth from './../CustomHooks/useAuth';
import useUserData from '../CustomHooks/useUserData';
import { Link, useNavigate } from 'react-router-dom';


const ProductCard = ({ productt, isInWhishlist, setLatestWhish, setLatestCart, setCart, isInCart }) => {

    // console.log(isInWhishlist);
    const userData = useUserData()
    const user = useAuth()
    const navigate = useNavigate()
    console.log(productt);


    const userEmail = userData.email
    // console.log(userEmail);
    // const {title,brand,price,stock,category,image,description}= productt
    // console.log(title,brand,price,stock,category,image,description);

    const handleWhishlist = async () => {
        await axios.patch("http://localhost:5000/wishlist/add", {
            userEmail: userEmail, productId: productt._id
        })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "success",
                        icon: "success",
                        title: "Product added to your whishlist",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }

            )
    }
    const handleRemoveWhishlist = async () => {
        await axios.patch("http://localhost:5000/wishlist/remove", {
            userEmail: userEmail, productId: productt._id
        })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "success",
                        icon: "success",
                        title: "Product removed from your whishlist",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setLatestWhish((prev) => !prev)
            }

            )
    }

    //cart handle 

    const handleCart = async () => {
        await axios.patch("http://localhost:5000/cart/add", {
            userEmail: userEmail, productId: productt._id
        })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "success",
                        icon: "success",
                        title: "Product added to your Cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }

            )
    }

    // remove Cart
    const handleRemoveCart = async () => {
        await axios.patch("http://localhost:5000/cart/remove", {
            userEmail: userEmail, productId: productt._id
        })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "success",
                        icon: "success",
                        title: "Product removed from your Cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setLatestCart((prev) => !prev)
            }

            )
    }

    const handleDetails = (id) => {
        console.log(id);
        // navigate(`/product/${id}`)
    }
    // navigate('`/product/${product.id}`')



    const cutDescription = productt.description.split(" ").slice(0, 3).join(" ")

    return (
        <div className="w-auto h-[350px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" onClick={() => handleDetails(productt._id)}>
            <div className="px-4 py-2 flex gap-2 items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{productt.title}</h1>
                {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {cutDescription}...
        </p> */}
                {/* <button className=''>
                    <Link to={`/product/${productt._id}`}>details</Link>
                </button> */}
                <Link to={`/product/${productt._id}`} class="relative my-2 px-2 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Details</span>
                </Link>
            </div>

            <img
                className=" w-full h-56 object-cover"
                src={productt.image}
                alt="NIKE AIR"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">${productt.price}</h1>
                {
                    userData.role === "Buyer" ? <>
                        {
                            isInWhishlist ? (<button className='h-5 w-5 bg-white rounded-full flex items-center justify-center' onClick={handleRemoveWhishlist}><IoHeartDislikeOutline /></button>) : (<button className='h-5 w-5 bg-white rounded-full flex items-center justify-center' onClick={handleWhishlist}><FaRegHeart /></button>)
                        }
                        {
                            isInCart ? (<button onClick={handleRemoveCart} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                                Remove cart
                            </button>) : (
                                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none" onClick={handleCart}>
                                    Add to cart

                                </button>
                            )
                        }
                    </> : <> </>
                }
            </div>
        </div>
    );
};

export default ProductCard;