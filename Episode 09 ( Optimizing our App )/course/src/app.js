import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header"; // name Import
import Body from "./Components/Body"; // Default Import
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contacts/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/> // react router dom is giving us this hook for error...
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);