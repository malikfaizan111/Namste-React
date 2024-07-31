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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

// export default Header;