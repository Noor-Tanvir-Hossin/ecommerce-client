import useAuth from '../../CustomHooks/useAuth';

const Overview = () => {
    const {user}= useAuth()
    return (
        <div className="flex justify-center items-center w-full h-full">
            <h1 className="text-xl font-bold  ">{user.email}</h1>
        </div>
    );
};

export default Overview;