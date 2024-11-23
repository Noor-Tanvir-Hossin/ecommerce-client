import { Link, NavLink } from 'react-router-dom';
import useUserData from '../../CustomHooks/useUserData';
import useAuth from '../../CustomHooks/useAuth';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
// import { IoMdAddCircleOutline } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";

// import AdminRoute from './../../Routes/PrivateRoutes/AdminRoute';
import Overview from './Overview';


const buyerRoutes = [
    {
        id: 1,
        route: '/dashboard/whishlist',
        title: 'My Whishlist',
        icon: <FaRegHeart size={22} />
       
    },
    {
        id: 2,
        route: '/dashboard/cart',
        title: 'My Cart',
        icon: <BsCart3 size={22} />
    },

];

const sellerRoutes = [
    {
        id: 1,
        route: '/dashboard/my-products',
        title: 'My Products',
        icon : <MdProductionQuantityLimits size={22} />
    },
    {
        id: 2,
        route: '/dashboard/add-products',
        title: 'Add Products',
        icon: <IoMdAddCircleOutline size={22} />
    },
];
const adminRoutes = [
    {
        id: 1,
        route: '/dashboard/allusers',
        title: 'All Users',
        icon : <TbUsers size={22} />
    },

];




const SideBar = () => {
    const data = useUserData();
    const { LogOut,user } = useAuth();
    // console.log(user);

    return (

        // <div className=' bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16'>
        //     <h1 className='text-3xl font-bold mb-8'>Gadget Shop</h1>
        //     <ul className='flex flex-col gap-2'>
        //         <li className='p2 border border-black rounded-md'>
        //             <NavLink to='/dashboard/overview'>Overview</NavLink>
        //         </li>

        //     {
        //         data.role === "Saller" && sellerRoutes.map((r) => (
        //             <li key={r.id} className='p2 border border-black rounded-md'>
        //             <NavLink to={r.route}>{r.title}</NavLink>
        //         </li>
        //         ))
        //     }
        //     {
        //         data.role === "Buyer" && buyerRoutes.map((r) => (
        //             <li key={r.id} className='p2 border border-black rounded-md'>
        //             <NavLink to={r.route}>{r.title}</NavLink>
        //         </li>
        //         ))
        //     }
        //     {
        //         data.role === "Admin" && adminRoutes.map((r) => (
        //             <li key={r.id} className='p2 border border-black rounded-md'>
        //             <NavLink to={r.route}>{r.title}</NavLink>
        //         </li>
        //         ))
        //     }


        // <li className='p2 border border-black rounded-md'>
        //     <NavLink to='/'>Home</NavLink>
        // </li>

        // <li className='p2 border border-black rounded-md' onClick={() => LogOut()}>
        //     <NavLink to='/'>LogOut</NavLink>
        // </li>

        //     </ul>
        // </div>

        <aside className="flex flex-col w-full h-full px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


            
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <div
                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                        
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <NavLink className='mx-4 font-medium' to='/dashboard/overview'>Overview</NavLink>
                    </div>


                    {
                        data.role === "Buyer" && buyerRoutes.map((r) => (
                            <div key={r.id}
                                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"

                            >
                               {r.icon}

                                <NavLink className='mx-4 font-medium' to={r.route}>{r.title}</NavLink>
                            </div>
                        ))
                    }

                    {
                        data.role === "Saller" && sellerRoutes.map((r) => (
                            <div key={r.id}
                                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"

                            >
                                {r.icon}

                                <NavLink className='mx-4 font-medium' to={r.route}>{r.title}</NavLink>
                            </div>
                        ))
                    }
                    {
                        data.role === "Admin" && adminRoutes.map((r) => (
                            <div key={r.id}
                                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"

                            >
                                {r.icon}

                                <NavLink className='mx-4 font-medium' to={r.route}>{r.title}</NavLink>
                            </div>

                            // <li key={r.id} className='p2 border border-black rounded-md'>
                            //     <NavLink to={r.route}>{r.title}</NavLink>
                            // </li>
                        ))
                    }



                    <div
                        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        
                    >
                        <IoHomeOutline size={22} />

                        <NavLink className='mx-4 font-medium' to='/'>Home</NavLink>
                    </div>



                    {/* <li className='p2 border border-black rounded-md'>
                    <NavLink to='/'>Home</NavLink>
                </li>

                <li className='p2 border border-black rounded-md' onClick={() => LogOut()}>
                    <NavLink to='/'>LogOut</NavLink>
                </li> */}


                    <div onClick={() => LogOut()}
                        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        
                    >
                        <IoIosLogOut size={22} />

                        <NavLink  className='mx-4 font-medium' to='/'>LogOut</NavLink>
                    </div>



                    {/* Additional Nav Items */}
                </nav>

                <div  className="flex items-center px-4 my-5 mx-2">
                    {
                        user.photoURL ? (<img
                            className="object-cover mx-2 rounded-full h-9 w-9"
                            src={user.photoURL}
                            alt="avatar"
                        />): <BiUserCircle size={22} />
                    }
                    <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                    {data.name}
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;