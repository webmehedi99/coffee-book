import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className=" navbar pt-6 pb-5 flex justify-between  ">

            <div>
                <h2 className=" text-xl">COOFEE_BOOK</h2>
            </div>

            <div className="navbar-end">
                <div className=" hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal gap-8 px-1">
                        <Link to='/'>Home</Link>
                        <Link to='/coffee'>Coffees</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                    </ul>

                </div>
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost flex items-center justify-center md:hidden lg:hidden">
                        <div className="w-[56px] h-[56px] rounded-full border-2 p-2">
                            <img src="https://img.icons8.com/?size=100&id=uOoIUTYvxnso&format=png&color=000000" alt="home icon" />
                        </div>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm -mr-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] h-[180px] -ml-[60px] p-2 shadow">
                        <Link to='/'>Home</Link>
                        <Link to='/coffee'>Coffees</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;