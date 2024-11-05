import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className=" navbar pt-6 pb-5 px-12 flex justify-between fixed z-50 backdrop-blur bg-white/30 ">

            <div>
                <h2 className=" text-xl">COOFEE_BOOK</h2>
            </div>

            <div className="navbar-end">
                <div className=" hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal gap-8 px-1">
                        <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning':'hover:text-warning'}`} to='/'>Home</NavLink >
                        <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning':'hover:text-warning'}`} to='/coffee'>Coffees</NavLink >
                        <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning':'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink >
                    </ul>

                </div>
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost flex items-center justify-center md:hidden lg:hidden">
                        <div className="w-[56px] h-[56px] rounded-full border-2 p-2">
                            <img src="https://img.icons8.com/?size=100&id=uOoIUTYvxnso&format=png&color=000000" alt="home icon" />
                        </div>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm -mr-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] h-[180px] -ml-[60px] p-2 shadow">
                        <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning':'hover:text-warning'}`} to='/'>Home</NavLink>
                        <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning':'hover:text-warning'}`} to='/coffee'>Coffees</NavLink>
                        <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning':'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;