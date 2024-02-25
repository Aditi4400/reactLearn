// when we want to pass siblings than we just make array [] of children.
// structure whic is made below is :
/* <div>
    <div>
        <h1></h1>
        <h2></h2>
    <div/>
    <div>
        <h1></h1>
        <h2></h2>
    <div/>
</div> */
// lets start
const parent=React.createElement("div",{id:"parent"},   
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"heading11"},"Heading 11"),React.createElement("h2",{id:"heading12"},"Heading 2")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"heading21"},"Heading 21"),React.createElement("h2",{id:"heading22"},"Heading 22")])]);

console.log(parent);
const heading=React.createElement("h1",{id:"head"},"Hi from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);