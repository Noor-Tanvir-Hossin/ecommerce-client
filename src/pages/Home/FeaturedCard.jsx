import React from 'react';
import useAuth from '../../CustomHooks/useAuth';
import useUserData from '../../CustomHooks/useUserData';

const FeaturedCard = ({product}) => {

    const userData = useUserData()
    const user= useAuth()
    const userEmail= user.email

    // const handleWhishlist = async() =>{
    //     await axios.patch("http://localhost:5000/wishlist/add",{
    //         userEmail: userEmail, productId: productt._id
    //     })
    //     .then((res) => {
    //         if(res.data.modifiedCount){
    //             Swal.fire({
    //                 position: "success",
    //                 icon: "success",
    //                 title: "Product added to your whishlist",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     }
        
    // )
    // }

    // const handleRemoveWhishlist = async() =>{
    //     await axios.patch("http://localhost:5000/wishlist/remove",{
    //         userEmail: userEmail, productId: productt._id
    //     })
    //     .then((res) => {
    //         if(res.data.modifiedCount){
    //             Swal.fire({
    //                 position: "success",
    //                 icon: "success",
    //                 title: "Product removed from your whishlist",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //         setLatestWhish((prev)=> !prev)
    //     }
        
    // )
    // }

    // const handleCart = async() =>{
    //     await axios.patch("http://localhost:5000/cart/add",{
    //         userEmail: userEmail, productId: productt._id
    //     })
    //     .then((res) => {
    //         if(res.data.modifiedCount){
    //             Swal.fire({
    //                 position: "success",
    //                 icon: "success",
    //                 title: "Product added to your Cart",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     }
        
    // )
    // }

    // const handleRemoveCart = async() =>{
    //     await axios.patch("http://localhost:5000/cart/remove",{
    //         userEmail: userEmail, productId: productt._id
    //     })
    //     .then((res) => {
    //         if(res.data.modifiedCount){
    //             Swal.fire({
    //                 position: "success",
    //                 icon: "success",
    //                 title: "Product removed from your Cart",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //         setLatestCart((prev)=> !prev)
    //     }
        
    // )
    // }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      {/* <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage:
            "url{`product.image`}",
        }}
      ></div>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {product.title}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">${product.price}</span>
          {
            userData.role === "Buyer" ? <>
            {
                isInWhishlist? (<button className='h-5 w-5 bg-white rounded-full flex items-center justify-center'onClick={handleRemoveWhishlist}><IoHeartDislikeOutline /></button>):(<button className='h-5 w-5 bg-white rounded-full flex items-center justify-center' onClick={handleWhishlist}><FaRegHeart /></button>)
            }
            {
                isInCart?(<button onClick={handleRemoveCart} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Remove cart
              </button>) :(
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none" onClick={handleCart}>
                Add to cart
                
              </button>
              )
            }
            </>: <> </>
        }
        </div>
      </div> */}
    </div>


    );
};

export default FeaturedCard;