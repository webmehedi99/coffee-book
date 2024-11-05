import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


const MainLayout = () => {
    return (
        <div>
            {/*NavBar  */}
            <div className="h-24">
                <NavBar></NavBar>
            </div>
            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12">

                <Outlet />
            </div>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;