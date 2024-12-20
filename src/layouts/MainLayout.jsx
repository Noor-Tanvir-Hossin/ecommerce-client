import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
           <div className="min-h-screen">
                <Outlet/>
           </div>
           <div>
                <Footer/>
           </div>
            
        </div>
    );
};

export default MainLayout;