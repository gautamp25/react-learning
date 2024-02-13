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
const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"This is an H1 tag"),
            React.createElement("h2",{},"This is an H2 tag")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"This is an H1 tag"),
            React.createElement("h2",{},"This is an H2 tag")
        ])
    ]       
)



// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parent)

root.render(parent)