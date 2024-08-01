import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import {useEffect, useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

    console.log("Header Rendered");

    let [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // if no dependency array => useEffect is called on every render
    // if depedency array is empty = [] => useEffect is called on initial render (just once)
    // if depedency array is [btnName] => called everytime btnName is updated.
    useEffect(()=>{
        console.log("useEffect called after every render of this component");
    },
    // [/*dependency array (Optional), it restrict every time after render call*/]
    [btnName] // for btnName only
)
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

// export default Header;