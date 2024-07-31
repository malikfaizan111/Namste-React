
// const heading = React.createElement("h1", { id: "heading" }, "Hello World From React!");

// console.log(heading); // object & React Element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/**
 * 
 * 
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * ReactElement(Object) ==> HTML(Browser Understands)
 * 
 */

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       [
//         React.createElement("h1", { id: "heading1", key: "1" }, "I'm an h1 tag"),
//         React.createElement("h2", { id: "heading2", key: "2" }, "I'm an h2 tag")
//       ]
//     )
//   );
//   console.log(parent);
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(parent);

const parent =
    React.createElement("div",
        { id: "parent" },
        [
            React.createElement("div",
                { id: "child" },
                [React.createElement("h1", {}, "I'm  an h1 tag"),
                React.createElement("h2", {}, "I'm  an h2 tag")
                ]
            ),
            React.createElement("div",
                { id: "child2" },
                [React.createElement("h1", {}, "I'm  an h1 tag"),
                React.createElement("h2", {}, "I'm  an h2 tag")
                ]
            )
        ]
    );

// messy code 
// jsx help is to get rid of this messy code
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)