import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import Overview from '../components/Dashboard/Overview';
import MyWhishlist from '../components/Dashboard/MyWhishlist';
import BuyerRoute from './PrivateRoutes/BuyerRoute';
import MyCarts from '../components/Dashboard/MyCarts';
import SallerRoute from './PrivateRoutes/SallerRoute';
import MyProducts from '../components/Dashboard/MyProducts';
import AddProducts from '../components/Dashboard/AddProducts';
import AdminRoute from './PrivateRoutes/AdminRoute';
import AllUsers from '../components/Dashboard/AllUsers';
import ProductDetails from '../components/Dashboard/ProductDetails';
import UpdateProducts from '../components/Dashboard/UpdateProducts';
import UpdateRole from '../components/Dashboard/UpdateRole';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/products",
        element:<Products></Products>
      },
      {
        path: "/product/:id",
        element:<ProductDetails></ProductDetails>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: '/dashboard/overview',
        element: <Overview></Overview>
      },
      {
        path: '/dashboard/whishlist',
        element: <BuyerRoute>
          <MyWhishlist></MyWhishlist>
        </BuyerRoute>
      },
      {
        path: '/dashboard/cart',
        element: <BuyerRoute>
          <MyCarts></MyCarts>
        </BuyerRoute>
      },
      {
        path: '/dashboard/my-products',
        element: <SallerRoute>
          <MyProducts></MyProducts>
        </SallerRoute>
      },
      
      {
        path: '/dashboard/add-products',
        element: <SallerRoute>
          <AddProducts></AddProducts>
        </SallerRoute>
      },
      {
        path: '/dashboard/updateProduct/:id',
        element: <SallerRoute>
         <UpdateProducts></UpdateProducts>
        </SallerRoute>
      },
      
      {
        path: '/dashboard/allusers',
        element: <AdminRoute>
          <AllUsers></AllUsers>
        </AdminRoute>
      },
      {
        path: '/dashboard/updateRole/:id',
        element: <AdminRoute>
           <UpdateRole></UpdateRole>
        </AdminRoute>
      },
    ]
  }
]);

export default router;