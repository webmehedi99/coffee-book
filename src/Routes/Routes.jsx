import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
import Coffee from "../Pages/Coffee";
import CoffeeCards from "../Components/CoffeeCards";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader : () => fetch('../categories.json'),
                children:[
                    {
                      path:'/',
                      element:<CoffeeCards></CoffeeCards>,
                      loader:()=> fetch('../coffees.json')
                    },
                    {
                      path:'/category/:category',
                      element:<CoffeeCards></CoffeeCards>,
                      loader:()=> fetch('../coffees.json')
                    }
                ]
            },
            {
                path: '/coffee',
                element: <Coffee />,
            },
            {
                path: '/dashboard',
                element: <DashBoard />,
            },
        ],
    },
]);

export default routes;
