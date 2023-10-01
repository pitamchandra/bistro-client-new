import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const li = <>
            <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-600" : ""}><a className="hover:text-blue-600 duration-500 capitalize hover:bg-transparent font-semibold mx-3">Home</a></NavLink>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? "text-blue-600" : ""}><a className="hover:text-blue-600 duration-500 capitalize hover:bg-transparent font-semibold mx-3">About</a></NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-blue-600" : ""}><a className="hover:text-blue-600 duration-500 capitalize hover:bg-transparent font-semibold mx-3">contact</a></NavLink>
    </> 

    return (
        <div className="bg-base-300 shadow-md">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                    </div>
                    <Link to={'/'} className="text-blue-600 uppercase font-bold">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;