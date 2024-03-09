/**
 *
 * 
 <div  id="parent">
    <div id="child">
        <h1>This is an H1 tag</h1>
        <h2>This is an H2 tag</h1>
    </div>
    <div id="child1">
        <h1>This is an H1 tag</h1>
        <h2>This is an H2 tag</h1>
    </div>
 </div>
 */
import React from "react"
import ReactDOM  from "react-dom/client"
// const parent = React.createElement(
//     "div",
//     {id:"parent"},[
//         React.createElement("div",{id:"child"},[
//             React.createElement("h1",{},"This is an H1 tag"),
//             React.createElement("h2",{},"This is an H2 tag")
//         ]),
//         React.createElement("div",{id:"child2"},[
//             React.createElement("h1",{},"This is an H1 tag"),
//             React.createElement("h2",{},"This is an H2 tag")
//         ])
//     ]       
// )



//  const heading = React.createElement("h1", {id:"heading"}, "Hello World from React")
//React Element
const jsxHeading = (<h1 className="head" tabIndex="2">
    Namaste React using JSX</h1>)

const Title = ()=>(
    <h1 className="title"> Namaste React using JSX</h1>
)

// React Functional Component
const HeadingComponent = () =>{
    return (
        <div id="container">
            
            <h1 className="heading">Namaste React Functional Component-1</h1>
        </div>
    )
    
}



const HeadingComponent2 = () =>(
        
        <div id="container">
            {Title()}
            <h1 className="heading">Namaste React Functional Component-2</h1>
        </div>
    
)
const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(parent)
console.log(jsxHeading)

root.render(<HeadingComponent2/>)