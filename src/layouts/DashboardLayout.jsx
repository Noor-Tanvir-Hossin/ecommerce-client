import { Outlet } from 'react-router-dom';
import SideBar from '../components/Dashboard/SideBar';
const DashboardLayout = () => {
    return (
        <div className=' grid gap-3 lg:grid-cols-12 '>
        <div className='col-span-3 px-5'>
            <SideBar></SideBar>
        </div>
        <div className='col-span-9  p-2 mt-10'>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default DashboardLayout;