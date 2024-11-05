import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
import Coffee from "../Pages/Coffee";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeDetails from "../Pages/CoffeDetails";

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
                loader:()=> fetch('../coffees.json')
            },
            {
                path: '/dashboard',
                element: <DashBoard />,
            },
            {
                path: '/coffee/:id',
                element: <CoffeDetails/>,
                loader:()=> fetch('../coffees.json')
            },
        ],
    },
]);

export default routes;
