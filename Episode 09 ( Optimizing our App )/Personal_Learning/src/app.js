import React from "react";
import ReactDOM from "react-dom/client";
import useAuth from "./Components/Custom_Hooks/useAuth";
// import useCustomFetch from "./Components/Custom_Hooks/useCustomFetch";
// import { MENU_API } from "./utils/constants";
// import useWindowSize from "./Components/Custom_Hooks/useWindowSize";

const AppLayout = () => {

    // const { data, loading } = useCustomFetch(MENU_API);
    // if (loading) return <p>Loading...</p>

    // return (
    //     <div>
    //         <h1>Data</h1>
    //         <pre>{JSON.stringify(data, null, 2)}</pre>
    //     </div>
    // );

    // const {width,height} = useWindowSize();

    // return (
    //     <div>
    //         <p>Window Width: {width}</p>
    //         <p>Window Height: {height}</p>
    //     </div>
    // )

    const isAuthenticated = useAuth();
    return isAuthenticated ? <p>Welcome!</p> : <p>Please log in.</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);