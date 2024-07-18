import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header"; // name Import
import Body from "./Components/Body"; // Default Import


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout/>);