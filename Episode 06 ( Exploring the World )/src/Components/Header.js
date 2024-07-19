import { LOGO_URL } from "../utils/constants";

export const Header = () => {

    const btnName = "Login"
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

// export default Header;