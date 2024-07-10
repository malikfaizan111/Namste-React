import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object ==> HTMLElement(render) 

const heading = React.createElement("h1", { id: "heading" }, "Hello World From React 🚀!");
console.log(heading); // object & React Element


// object & React Element is not developer friendly so JSX is here for us!.


// JSX - is not HTML in JS but (it is like HTML or XML syntax)


// JSX ==> (Babel transpiled before it reaches the JS Engine) ==> PARCEL - Babel

// React Element
const jsxHeading = ( <h1 className="head" tabIndex="5">Namaste React using JSX 🚀</h1> );

// JSX => React.createElement ==> ReactElement-JS Object => HTMLElement(render)

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component

// const headingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// }

const reactElement =  (
    <h1 className="head" tabIndex="5">
        React Element 🚀
    </h1>
);


const TitleComponent = () => (
    <h1 className="head" tabIndex="5">
        React Functional Component 🚀
    </h1>
);


// const data = api.getData(); // melicious api data attacker sent..
// {} it is sentizing your data from the attack.. 
// component composition. ==> this is called component composition 

const HeadingComponent = () => (
    <div id="container">
    {reactElement}
    {/* <TitleComponent /> */}
    {/* OR */}
    {/* <TitleComponent ></TitleComponent> */}
    {/* OR */}
    {TitleComponent()}
        <h1 className="heading">this is called component composition </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent()); // X False
root.render(<HeadingComponent />); // True