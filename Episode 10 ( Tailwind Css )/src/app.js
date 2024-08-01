import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header"; // name Import
import Body from "./Components/Body"; // Default Import
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
// import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(() => import("./Components/About"));


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
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                      <About />
                    </Suspense>
                  ),
            },
            {
                path:'/contact',
                element: <Contacts/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: (
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                  </Suspense>
                ),
              },
        ],
        errorElement:<Error/> // react router dom is giving us this hook for error...
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);